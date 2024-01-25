import React from 'react'
import { TbPasswordUser } from "react-icons/tb";

const UserPassword = () => {
    return (
        <div>
            <div className="bg-white p-7 w-[940px] rounded-xl m-12 shadow-xl">
                <h1 className="text-2xl font-rubik font-bold pb-4">Personal Details</h1>
                <div className="grid md:grid-cols-1 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <TbPasswordUser className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder=" Old password" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <TbPasswordUser className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder=" New password" required />
                    </div>
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <TbPasswordUser className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder=" Confirm password" required />
                    </div>
                </div>
                <button className="text-xl hover:bg-black border-2 border-gray-500 mt-4 hover:border-black font-rubik hover:text-white px-4 py-2">Update</button>
            </div>
        </div>
    )
}

export default UserPassword