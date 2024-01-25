import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAllAddtoCard from "../../hooks/useAllAddtoCard";
import useAllAddtoLove from "../../hooks/useAllAddtoLove";



const User = () => {
    const { isPending, error, addtocard, refetch } = useAllAddtoCard();
    const { addtolove, } = useAllAddtoLove()
    const { user, logOut } = useContext(AuthContext);



    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return <div>

        {
            user ? <div className="flex items-center gap-3">

                <Link to="/addtowishlist">
                    <div className="indicator">
                        <button className="p-4 text-lg bg-gray-200 rounded-full"> <FaRegHeart /></button>
                        <span className="absolute -mt-1 ml-8 rounded-full bg-danger bg-orange-600 font-medium w-6 h-6 pl-[2px] text-white">+{addtolove?.length}</span>
                    </div>
                </Link>

                <Link to="/addtocart">
                    <div className="indicator">
                        <button className="p-4 text-lg bg-gray-200 rounded-full"> <FaCartShopping /></button>
                        <span className="absolute -mt-1 ml-8 rounded-full bg-danger bg-orange-600 font-medium w-6 h-6 pl-[2px] text-white">+{addtocard?.length}</span>
                    </div>
                </Link>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="object-contain w-12 rounded-full">
                            <img alt="User" className="object-cover" src="https://i.ibb.co/jyk7NGb/blank-black-white-image-placeholder-icon-design-178700106.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <p className="my-3 font-semibold text-center">{user?.displayName}</p>
                        <Link className="py-2 mb-3 font-medium text-center text-black border hover:bg-black hover:text-white" to="userdashboard">My Profile</Link>
                        <button onClick={handleLogOut} className="py-2 mb-3 font-medium text-center text-black border hover:bg-red-500 hover:text-white">Sign out</button>
                    </ul>
                </div>

            </div>
                :
                <div>
                    <NavLink to="/signin" className="hidden font-semibold lg:text-black lg:inline">Sign In</NavLink>
                    <NavLink to="/signin" className="text-2xl font-semibold lg:text-black lg:hidden"><FaUserPlus /></NavLink>
                </div>
        }
    </div >
}

export default User