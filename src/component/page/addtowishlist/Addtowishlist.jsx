import React, { useEffect, useState } from 'react';
import useAllAddtoLove from '../../hooks/useAllAddtoLove';
import { MdDelete } from 'react-icons/md';
import NodataHere from '../../common/NodataHere';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import UserAxiosSecure from '../../hooks/UserAxiosSecure';
import useAllAddtoCard from '../../hooks/useAllAddtoCard';

const Addtowishlist = () => {
    const { user } = UseAuth();
    const data = useLoaderData();
    const axiosData = UseAxiosPublic()
    const axiosSecure = UserAxiosSecure();
    const { addtolove: addtocard, refetch } = useAllAddtoLove()
    const { refetch: addcardreface } = useAllAddtoCard()



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
                axiosData.delete(`/addtolove/${id}`)
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


    const handleaddtoCart = (item) => {
        const email = user?.email;
        const { _id, ...dataWithoutId } = item;
        const data = { ...dataWithoutId, email };
        axiosSecure.post('/addtocart', data)
            .then(res => {
                addcardreface()
                Swal.fire({
                    title: "Good job!",
                    text: "Item successfully added",
                    icon: "success"
                });
            })
    }

    const handelAllClear = () => {
        const email = user?.email;
        axiosSecure.get(`/allloveclear?email=${email}`)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "Item successfully added",
                    icon: "success"
                });
                refetch()
            })
    }


    return (
        <div className="lg:col-span-3 container mx-auto md:col-span-2 sm:col-span-1">
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
                                <th onClick={() => handelAllClear()} scope="col" class="px-6 py-3">
                                    <button className="bg-black px-6 py-3 text-white text-sm font-medium ">Clear Cart</button>
                                </th>
                            </tr>
                        </thead>
                        {
                            addtocard?.map(item =>
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
                                            <button onClick={() => handleaddtoCart(item)} className="md:px-4 sm:px-4 px-2 lg:px-4 lg:py-2 md:py-2 sm:py-2 py-1 md:text-base border-2  hover:border-black hover:bg-black hover:text-white font-rubik">Add to Cart</button>
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
    );
};

export default Addtowishlist;