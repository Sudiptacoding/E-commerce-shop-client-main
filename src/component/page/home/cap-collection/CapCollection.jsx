import { Link } from "react-router-dom"
import cappp from "../../../../../public/image/cappp.png"
import { LuShoppingCart } from "react-icons/lu"
import UseMenus from "../../../hooks/UseMenus";


const CapCollection = () => {
    const [menus] = UseMenus();
    const cap = menus.filter(item => item.category === 'cap');

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className="px-12">
            <div className="justify-between pb-3 flex">
                <h1 className="font-rubik font-bold  text-2xl"> <span className="underline decoration-orange-500 underline-offset-8">SLECKTON High</span> Quality Cap</h1>
                <Link to="/shop">
                    <button className="cursor-pointer rounded-md py-2 font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">View All</button>
                </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                <div className="rounded-xl col-span-2 bg-no-repeat w-full" style={{ backgroundImage: `url(${cappp})` }}>
                    <h1 className="font-rubik text-6xl text-white p-4">Customer <br /> <span className="text-6xl font-bold">100% <br /> satisfaction</span> </h1>
                </div>

                <div className="col-span-2  grid md:grid-cols-2 gap-6 items-center">

                    {
                        cap.map(item =>

                            <div key={item.id} className="">
                                <Link to={`/menusdetails/${item._id}`}>
                                    <img className="w-full  h-[284px] rounded-xl" src={item.image} alt="" />
                                </Link>
                                <div>
                                    <h1 className="text-xl font-bold">{item.name}</h1>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-lg font-bold">${item.price}</h1>
                                        <div className=" bg-[#edededb1] p-3 rounded-full left-14 ">
                                            <LuShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CapCollection