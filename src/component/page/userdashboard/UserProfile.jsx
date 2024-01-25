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

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div > 
            <div className="bg-white p-7 rounded-xl m-12 shadow-xl">
                <div className=" flex justify-between">
                    <div>
                        <Profilepicture></Profilepicture>
                        <h1 className="text-2xl py-1 font-medium pt-2">Safayet Ahmed</h1>
                        <p>asafayet21@gmail.com</p>
                    </div>
                        {
                            user? <p><button onClick={handleLogOut} className=" px-4 py-2 font-medium text-center text-black border hover:bg-red-500 hover:text-white">Sign out</button> </p> : ""
                        }
                </div>

                {/*  */}
                <div className="grid grid-cols-3 pt-10 items-center gap-6">
                    <div className="indicator">
                        <button className="text-lg border rounded-lg p-10"> <FaCartShopping className="text-4xl"  /></button>
                        <span className="border px-2 rounded-full bg-black text-white indicator-item">+{addtocard?.length}</span>
                    </div>
                    <div className="indicator">
                        <button className="text-lg border rounded-lg p-10"> <FaRegHeart className="text-4xl"  /></button>
                        <span className="border px-2 rounded-full  bg-black text-white indicator-item">+{addtolove?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile