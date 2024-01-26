import { MdDelete } from "react-icons/md";
import useAllAddtoCard from "../../hooks/useAllAddtoCard"
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import NodataHere from "../../common/NodataHere";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import UserAxiosSecure from "../../hooks/UserAxiosSecure";



const AddtoCart = () => {
    const { user } = UseAuth();
    const axiosSecure = UserAxiosSecure();

    const [increase, setIncrease] = useState([])
    console.log(increase)


    const [menusdetails, setMenusdetails] = useState({})

    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const axiosData = UseAxiosPublic()
    const { isPending, error, addtocard, refetch } = useAllAddtoCard()
    const totalPrice = addtocard?.reduce((total, item) => total + parseFloat(item.price), 0);
    console.log(totalPrice)

    const handelCount = (item, i) => {
        console.log(item, i)
    }

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
        axiosSecure.post('/buynow', item)
            .then(res => {
                window.location.replace(res.data.url)
            })
    }





    return (
        <div className="pt-16 container h-[1200px] mx-auto px-4">
            <h1 className="pl-3 font-bold text-3xl pb-6 text-orange-500">Shopping Cart</h1>
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
                                            <button onClick={() => handleClearCart()} className="bg-black px-6 py-3 text-white text-sm font-medium ">Clear Cart</button>
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    addtocard?.map((item, i) =>
                                        <tbody key={item._id}>
                                            <tr>
                                                <th scope="row" class="px-6 py-4 lg:flex items-center gap-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img className='lg:w-28 md:w-28 sm:w-28 w-16 rounded-xl lg:h-28 md:h-28 sm:h-28 h-16' src={item?.image?.[0]} alt="" />
                                                    <h1 className="lg:text-xl font-bold">{item?.name}</h1>
                                                </th>
                                                <td class="px-6 text-xl font-medium text-black py-4">
                                                    {item?.price}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div className="flex">


                                                        <div className="text-center border rounded-md ">
                                                            <button
                                                                onClick={() => handelCount(item, i)}
                                                                className="lg:px-2 md:px-2 sm:px-2 pt-0 pb-1 text-xl border-r-2">-</button> <span className="px-2 py-2 text-xl">2</span> <button

                                                                    className="lg:px-2 md:px-2 sm:px-2 pt-0 pb-1 text-xl border-l-2 ">+</button>
                                                        </div>
                                                        {/* <div className="text-center border rounded-md ">
                                                            <button onClick={() => {
                                                                selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)
                                                            }}
                                                                className="lg:px-2 md:px-2 sm:px-2 pt-0 pb-1 text-xl border-r-2">-</button> <span className="px-2 py-2 text-xl">{selectedQuantity}</span> <button
                                                                    onClick={() => {
                                                                        selectedQuantity < 10 && setSelectedQuantity(selectedQuantity + 1)
                                                                    }}
                                                                    className="lg:px-2 md:px-2 sm:px-2 pt-0 pb-1 text-xl border-l-2 ">+</button>
                                                        </div> */}




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
                <div className="bg-white lg:mt-0 mt-10 w-full h-fit shadow-xl lg:border-none md:border-none sm:border-none border-2 m p-6 mr-8 shadow-slate-200">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Subtotal</h1>
                        <h1 className="text-xl font-medium">${totalPrice}</h1>
                    </div>
                    <hr className="my-2" />
                    <h1 className="text-xl pb-4 font-medium">Shipping</h1>
                    <div className="flex gap-2 items-center">
                        <input type="radio" name="radio-5" className="w-6 h-6 radio radio-primary" />
                        <h1 className="text-xl font-medium">Free shipping</h1>
                    </div>
                    <hr className="mt-4 pb-2" />
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Total</h1>
                        <h1 className="text-xl font-medium">${totalPrice}</h1>
                    </div>
                    <div className="pt-4 text-center">
                        <button onClick={() => handelBuyNow(menusdetails)} className="bg-black px-8 py-2 text-white font-medium hover:bg-white hover:border-2 hover:text-black hover:border-black">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddtoCart