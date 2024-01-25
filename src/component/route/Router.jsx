import { Outlet } from "react-router-dom"
import Navbar from "../shared/navbar/Navbar"
import Footer from "../shared/Footer"


const Router = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Router