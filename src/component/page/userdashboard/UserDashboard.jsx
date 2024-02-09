import { NavLink, Outlet } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { useContext, useState } from "react";
import Logo from "../../../../public/image/logo.png"
import { MdManageHistory, MdOutlinePayment } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";


const UserDashboard = () => {
    const [expanded, setExpanded] = useState(true)
    const [open, setOpen] = useState(true);

    const users = true;
    const { user } = useContext(AuthContext)

    return (
        <div className="container w-full mx-auto">
            <div className="flex">
                <div className="flex">
                    <div className={`${open ? "w-72" : "w-16"} duration-700 md:p-5  md:pt-8 shadow-lg shadow-[#00000036] h-screen bg-white relative`}>
                        <p onClick={() => setOpen(!open)} className={` bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 rounded-md absolute cursor-pointer -right-3 md:top-10 ${!open && "rotate-180"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/arrow-left-03-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                <path d="M4 6L4 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M8 12.0005L20 12.0005" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 8C12 8 8.00001 10.946 8 12C7.99999 13.0541 12 16 12 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </p>
                        <div className="flex items-center gap-x-4">
                            <img className={`cursor-pointer duration-500`} src={Logo} alt="" />
                            <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>E-Shoping</h1>
                        </div>
                        <ul className="menu">
                            {
                                users ? <>
                                    <li className="mb-2 font-medium text-black rounded-md md:w-full hover:text-white"><NavLink to="/userdashboard/userprofile"> <FiHome className="text-xl" /><p className={`  ${!open && "hidden "}`}>Profile</p></NavLink></li>
                                    <li className="mb-2 font-medium text-black rounded-md md:w-full hover:text-white"><NavLink to="/userdashboard/userinfo"> <MdOutlinePayment className="text-xl" /><p className={` ${!open && "hidden"}`}>Information</p></NavLink></li>
                                    <li className="mb-2 font-medium text-black rounded-md md:w-full hover:text-white"><NavLink to="/userdashboard/userpassword"> <FaUserFriends className="text-xl" /><p className={` ${!open && "hidden"}`}>Change Password</p></NavLink></li>
                                    <div className="py-4 pb-6">
                                        <hr />
                                    </div>
                                </> :
                                    <>
                                        {/*  */}
                                    </>
                            }
                            <li className="mb-2 font-medium text-black rounded-md md:w-full hover:text-white"><NavLink to="/"> <FiHome className="text-xl" /><p className={` ${!open && "hidden"}`}>Home</p></NavLink></li>
                        </ul>
                    </div>
                    {/* <div className="flex-1 h-screen text-2xl font-semibold p-7">
                        <h1>Home</h1>
                    </div> */}
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default UserDashboard