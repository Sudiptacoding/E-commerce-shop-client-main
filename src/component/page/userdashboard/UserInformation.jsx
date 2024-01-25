import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";


const UserInformation = () => {
    return (
        <div >
            <div className="bg-white p-7 w-[940px] rounded-xl m-12 shadow-xl">
                <h1 className="text-2xl font-rubik font-bold pb-4">Personal Details</h1>
                <div className="grid md:grid-cols-2 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <CiUser className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <MdOutlineEmail className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <CiFacebook className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <FaTwitter className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <LuPhoneCall className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                    <select className="select select-bordered bg-gray-50 border border-none">
                        <option disabled selected>select option?</option>
                        <option>male</option>
                        <option>fimale</option>
                    </select>
                </div>
                <div className="grid md:grid-cols-1 mb-4 items-center  gap-4">
                    <div className="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center pl-3 ">
                            <IoLocationOutline className="text-2xl font-bold" />
                        </div>
                        <input type="search" id="default-search" className=" grid grid-cols-1 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  border-none  dark:text-white " placeholder="Shahnewaz Sakil" required />
                    </div>
                </div>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm h-32 w-full" ></textarea>
                <button className="text-xl hover:bg-black border-2 border-gray-500 mt-4 hover:border-black hover:text-white px-4 py-2">Update Profile</button>
            </div>
        </div>
    )
}

export default UserInformation