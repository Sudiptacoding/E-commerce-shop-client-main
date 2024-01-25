
import { Link } from "react-router-dom";
import UseMenus from "../../../hooks/UseMenus";
import { LuShoppingCart } from "react-icons/lu";

const ShirtCollection = () => {
    const [menus] = UseMenus();
    const shirt = menus.filter(item => item.category === 'shirt');

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className="px-12 py-16">
            <div className="flex justify-between pb-3">
                <h1 className="text-2xl font-bold font-rubik">Men Solid Button Up Shirt</h1>
                <Link to="/shop">
                    <button className="px-4 py-2 font-medium transition-all duration-200 border-white rounded-md shadow cursor-pointer hover:bg-black hover:text-white w-fit hover:scale-105">View All</button>
                </Link>
            </div>

            {/* allcard */}
            <div className="grid items-center gap-6 md:grid-cols-4">
                {
                    shirt.map(item =>
                        <div key={item.id}>
                            <Link to={`/menusdetails/${item?._id}`}>
                                <img className="w-full rounded-xl" src={item.image} alt="" />
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
    )
}

export default ShirtCollection;