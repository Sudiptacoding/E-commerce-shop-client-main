import { Link, NavLink } from "react-router-dom"
import User from "./User"
import Search from "./Search"
import Logo from "./Logo"
import Category from "../../page/category/Category"
import './navbar.css';
import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"



const Navbar = () => {

    const { user } = useContext(AuthContext)

    const navLinks = <>
        <li className='font-semibold nav-link lg:text-black'><NavLink to="/">Home</NavLink></li>
        <li className='font-semibold nav-link lg:text-black'><NavLink to="/shop">Shop</NavLink></li>
        <li className='font-semibold nav-link lg:text-black'><NavLink to="/blog">Blog</NavLink></li>
        <li className='font-semibold lg:text-black nav-link'><NavLink to="/aboutus">About Us</NavLink></li>
        <li className='font-semibold lg:text-black nav-link'><NavLink to="/contact">Contact</NavLink></li>
        {
            user?.email != 'sudiptabiswas506@gmaila.com'  ? <>
                <li className='font-semibold lg:text-black nav-link'><NavLink to="/adminDashboard">Dashboard</NavLink></li>
            </> : <>
            <li className='font-semibold lg:text-black nav-link'><NavLink to="/userdashboard">Dashboard</NavLink></li>
            </>
        }
    </>

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
                {/* Navbar */}
                <div className="justify-between w-full px-5 bg-white navbar">
                    <div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="text-black btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex px-2 py-0 mx-2"><Link><Logo></Logo></Link></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navLinks}
                            </ul>
                        </div>
                    </div>

                    <div className='items-center hidden gap-10 lg:flex'>
                        <div >
                            <Search />
                        </div>

                        <div>
                            <User />
                        </div>
                    </div>
                </div>

            </div>
            <div className="z-20 drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="min-h-full p-4 menu w-80 bg-base-200">
                    <div className='flex justify-end mb-6'>
                        <User />
                    </div>
                    <div className='mb-6'>
                        <Search />
                    </div>
                    {navLinks}

                </ul>

            </div>
        </div>
    )
}

export default Navbar