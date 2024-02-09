import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAllAddtoCard from "../../hooks/useAllAddtoCard";
import useAllAddtoLove from "../../hooks/useAllAddtoLove";
import Profilepicture from "./Profilepicture";


const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    const { isPending, error, addtocard, refetch } = useAllAddtoCard()
    const { addtolove } = useAllAddtoLove()
  
    console.log(addtocard , addtolove)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div >
            <div className="m-12 bg-white shadow-xl p-7 rounded-xl">
                <div className="flex justify-between ">
                    <div>
                        <Profilepicture></Profilepicture>
                        <h1 className="py-1 pt-2 text-2xl font-medium">{user?.displayName}</h1>
                        <p>{user?.email}</p>
                    </div>
                    {
                        user ? <p><button onClick={handleLogOut} className="px-4 py-2 font-medium text-center text-black border hover:bg-red-500 hover:text-white">Sign out</button> </p> : ""
                    }
                </div>

                {/*  */}
                <div className="grid items-center grid-cols-3 gap-6 pt-10">
                    <div className="indicator">
                        <button className="p-10 text-lg border rounded-lg"> <FaCartShopping className="text-4xl" /></button>
                        <span className="px-2 text-white bg-black border rounded-full indicator-item">+{addtocard?.length}</span>
                    </div>
                    <div className="indicator">
                        <button className="p-10 text-lg border rounded-lg"> <FaRegHeart className="text-4xl" /></button>
                        <span className="px-2 text-white bg-black border rounded-full indicator-item">+{addtolove?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile