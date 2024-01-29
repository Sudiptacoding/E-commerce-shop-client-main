import { MdDelete } from "react-icons/md";
import useAllAddtoCard from "../../hooks/useAllAddtoCard"
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import NodataHere from "../../common/NodataHere";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import UserAxiosSecure from "../../hooks/UserAxiosSecure";



const AddtoCart = () => {
    const { user } = UseAuth();
    const axiosSecure = UserAxiosSecure();
    const axiosData = UseAxiosPublic()
    const { isPending, error, addtocard, refetch } = useAllAddtoCard()
    const [totalItem, setTotalItem] = useState([])

    const [totalPrice, setTotalPrice] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)
    const [quantities, setQuantities] = useState(addtocard?.map(() => 1));
    const [isDiscount, setIsDiscount] = useState(false)

    const handleCountChange = (index, amount) => {
        const newQuantities = [...quantities];
        newQuantities[index] += amount;
        if (newQuantities[index] < 1) newQuantities[index] = 1;
        setQuantities(newQuantities);
    };


    useEffect(() => {
        const totalProducts = [];
        addtocard?.forEach((item, index) => {
            if (quantities[index] > 0) {
                totalProducts.push({
                    ...item,
                    quantity: quantities[index]
                });
            }
        });
        setTotalItem(totalProducts)
        const totalPrices = totalProducts?.reduce((total, item) => total + parseFloat(item?.price * item?.quantity), 0);
        setTotalPrice(totalPrices?.toFixed(2))
        if (isDiscount) {
            setTotalAmount(totalPrices - (totalPrices * 0.1)?.toFixed(2))
        } else {
            setTotalAmount(totalPrices?.toFixed(2))
        }
    }, [quantities, addtocard, isDiscount])



    const handelDeletCard = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/addtocard/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });
    }


    // delete all card
    const handleClearCart = (id) => {
        const email = user?.email;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.get(`/allcardclear?email=${email}`)
                    .then(res => {
                        Swal.fire({
                            title: "Good job!",
                            text: "Item successfully added",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });
    }


    // 
    const handelBuyNow = (item) => {
        console.log(item)
        axiosSecure.post('/buynow', item)
            .then(res => {
                window.location.replace(res.data.url)
            })
    }





    console.log(totalItem)

    return (
        <div className="pt-16 container h-[1200px] mx-auto px-4">
            <h1 className="pb-6 pl-3 text-3xl font-bold text-orange-500">Shopping Cart</h1>
            <div className="grid lg:gap-8 md:gap-5 lg:grid-cols-4">
                <div className="lg:col-span-3 md:col-span-2 sm:col-span-1">
                    {
                        addtocard?.length > 0 ? <div class="relative ml-3 w-full overflow-x-auto sm:rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Quantity
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <button onClick={() => handleClearCart()} className="px-6 py-3 text-sm font-medium text-white bg-black ">Clear Cart</button>
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    addtocard?.map((item, i) =>
                                        <tbody key={item._id}>
                                            <tr>
                                                <th scope="row" class="px-6 py-4 lg:flex items-center gap-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img className='w-16 h-16 lg:w-28 md:w-28 sm:w-28 rounded-xl lg:h-28 md:h-28 sm:h-28' src={item?.image?.[0]} alt="" />
                                                    <h1 className="font-bold lg:text-xl">{item?.name}</h1>
                                                </th>
                                                <td class="px-6 text-xl font-medium text-black py-4">
                                                    {item?.price}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div className="flex">
                                                        <div key={item._id} className="text-center border rounded-md">
                                                            <button
                                                                onClick={() => handleCountChange(i, -1)}
                                                                className="pt-0 pb-1 text-xl border-r-2 lg:px-2 md:px-2 sm:px-2">-</button>
                                                            <span className="px-2 py-2 text-xl">{quantities?.length > 0 && quantities[i]}</span>
                                                            <button
                                                                onClick={() => handleCountChange(i, 1)}
                                                                className="pt-0 pb-1 text-xl border-l-2 lg:px-2 md:px-2 sm:px-2 ">+</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <button onClick={() => handelDeletCard(item?._id)}
                                                        className="bg-[#ffffff56] flex items-center font-bold gap-2 bg-slate-200 hover:text-white md:p-4 sm:p-4  lg:p-4 p-2 rounded-md hover:bg-red-600">
                                                        <MdDelete className="text-gray-800 border"></MdDelete> Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        </div> : <NodataHere></NodataHere>
                    }
                </div>
                <div className="w-full p-6 mt-10 mr-8 bg-white border-2 shadow-xl lg:mt-0 h-fit lg:border-none md:border-none sm:border-none m shadow-slate-200">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Subtotal</h1>
                        <h1 className="text-xl font-medium">${totalPrice}</h1>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between item-center">
                        <h1 className="pb-4 text-xl font-medium">Shipping</h1>
                        <h1 className="text-xl font-medium">$10%</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <input onChange={() => setIsDiscount(!isDiscount)} type="checkbox" name="radio-5" className="w-6 h-6 radio radio-primary" />
                        <h1 className="text-xl font-medium">Free shipping</h1>
                    </div>
                    <hr className="pb-2 mt-4" />
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Total</h1>
                        <h1 className="text-xl font-medium">${totalAmount || totalPrice}</h1>
                    </div>
                    <div className="pt-4 text-center">
                        <button onClick={() => handelBuyNow(totalItem)} className="px-8 py-2 font-medium text-white bg-black hover:bg-white hover:border-2 hover:text-black hover:border-black">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddtoCart