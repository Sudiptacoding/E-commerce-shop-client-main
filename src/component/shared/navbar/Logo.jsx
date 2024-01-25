import logo from "../../../../public/image/logo.png"


const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-black font-kapakana font-black">E-Shopping</h1>
        </div>
    )
}

export default Logo