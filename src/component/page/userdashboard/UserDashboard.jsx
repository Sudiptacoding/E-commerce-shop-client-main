import { NavLink, Outlet } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";


const UserDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white shadow-2xl">
                <ul className="menu">
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userprofile"> <CgProfile />Profile</NavLink></li>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userinfo"> <IoMdInformationCircleOutline /> Information</NavLink></li>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userpassword"> <RiLockPasswordLine /> Change password</NavLink></li>
                    <div className="py-4 pb-6">
                        <hr />
                    </div>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/"> <FiHome /> Home</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default UserDashboard