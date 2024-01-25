import { NavLink, Outlet } from "react-router-dom"
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { useState } from "react";
import Logo from "../../../../public/image/logo.png"


const AdminDashboard = () => {
    const [expanded, setExpanded] = useState(true)
    const [open, setOpen] = useState(true);

    const isadmin = true;

    return (
        <div className="w-full container mx-auto">
            <div className="flex">
                <div className="flex">
                    <div className={`${open ? "w-72" : "w-20"} duration-700 md:p-5  md:pt-8 shadow-lg shadow-[#00000036] h-screen bg-white relative`}>
                        <p onClick={() => setOpen(!open)} className={` bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 rounded-md absolute cursor-pointer -right-3 md:top-10 ${!open && "rotate-180"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/arrow-left-03-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                <path d="M4 6L4 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M8 12.0005L20 12.0005" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 8C12 8 8.00001 10.946 8 12C7.99999 13.0541 12 16 12 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </p>
                        <div className="flex gap-x-4 items-center">
                            <img className={`cursor-pointer duration-500`} src={Logo} alt="" />
                            <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>E-Shoping</h1>
                        </div>
                        <ul className="menu">
                            {
                                isadmin ? <>
                                    <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/adminDashboard/adminhome"> <FiHome className="text-xl" /><p className={`  ${!open && "hidden "}`}>Dashboard</p></NavLink></li>
                                    <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/adminDashboard/paymenthhistory"> <MdOutlinePayment className="text-xl" /><p className={` ${!open && "hidden"}`}>Payment History</p></NavLink></li>
                                    <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/adminDashboard/alluser"> <FaUserFriends className="text-xl" /><p className={` ${!open && "hidden"}`}>All User</p></NavLink></li>
                                    <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/adminDashboard/additem"> <MdManageHistory className="text-xl" /><p className={` ${!open && "hidden"}`}>Add Items</p></NavLink></li>
                                    <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/adminDashboard/manageitem"> <MdManageHistory className="text-xl" /><p className={` ${!open && "hidden"}`}>Manage Items</p></NavLink></li>
                                    <div className="py-4 pb-6">
                                        <hr />
                                    </div>
                                </> :
                                    <>
                                        {/*  */}
                                    </>
                            }
                            <li className="  md:w-full rounded-md mb-2  font-medium text-black hover:text-white"><NavLink to="/"> <FiHome className="text-xl" /><p className={` ${!open && "hidden"}`}>Home</p></NavLink></li>
                        </ul>
                    </div>
                    {/* <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                        <h1>Home</h1>
                    </div> */}
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default AdminDashboard