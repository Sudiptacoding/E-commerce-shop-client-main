import { Link } from "react-router-dom"
import banner from "../../../../public/image/banner.png"
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { Rating } from "@mui/material";
import UseMenus from "../../hooks/UseMenus";
import { useState } from "react";
import NodataHere from "../../common/NodataHere";


const Shop = () => {
    const [menus] = UseMenus();
    console.log(menus)
    const [menu, setMenu] = useState(menus)


    const filterValue = (e) => {
        const rangeValues = e?.split('-');
        const firstValue = rangeValues ? rangeValues[0] : null;
        const secondValue = rangeValues ? rangeValues[1] : null;
        console.log(firstValue, secondValue);
        const filteredArray = menus?.filter(number => number?.price >= firstValue && number?.price <= secondValue);
        setMenu(filteredArray);
    }

    const filterData = (cata) => {
        const filtercategory = menus?.filter(item => item?.category === cata);
        setMenu(filtercategory);
    }

    const filterDataRating = (cata) => {
        const filtercategory = menus?.filter(item => item?.ratting === cata);
        setMenu(filtercategory);
    }

    const filterDataSize = (size) => {
        const filtercategory = menus?.filter(item => item?.size === size);
        setMenu(filtercategory);
    }


    return (
        <div className="container mx-auto">
            <div className="py-24 text-center" style={{ backgroundImage: `url(${banner})` }}>
                <Link to="/">
                    <button className="px-6 py-2 text-xl font-medium border border-black rounded-md hover:bg-black hover:text-white">Home</button>
                </Link>
                <h1 className="pt-2 text-4xl font-bold text-gray-800 font-rubik">Welcome to The Shop</h1>
            </div>

            {/* filter section */}
            <div className="grid col-span-4 px-12 py-10 md:grid-cols-4">
                <div className="col-span-1 ">
                    <h1 className="pb-2 text-2xl font-bold font-rubik"> Filter</h1>

                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                    {/* Price */}
                    <div className="pt-6">
                        <h1 className="pb-3 text-lg font-bold font-rubik">Price</h1>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterValue(e.target.value)} id="default-radio-1" type="radio" value="40-60" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">40-60</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterValue(e.target.value)} id="default-radio-1" type="radio" value="60-80" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">60-80</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterValue(e.target.value)} id="default-radio-1" type="radio" value="80-100" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">80-100</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterValue(e.target.value)} id="default-radio-1" type="radio" value="100-120" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">100-120</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterValue(e.target.value)} id="default-radio-1" type="radio" value="120-200" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">120-200</h1>
                        </div>
                    </div>

                    {/* category */}
                    <div className="pt-6">
                        <h1 className="pb-3 text-lg font-bold font-rubik">Categories</h1>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterData(e.target.value)} id="default-radio-1" type="radio" value="cap" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">Caps</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterData(e.target.value)} id="default-radio-1" type="radio" value="beg" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">Begs</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterData(e.target.value)} id="default-radio-1" type="radio" value="t-shirt" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">T-shirt</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterData(e.target.value)} id="default-radio-1" type="radio" value="shirt" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">Shirt</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterData(e.target.value)} id="default-radio-1" type="radio" value="hoodie" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">Hoodie</h1>
                        </div>
                    </div>

                    {/* star */}
                    <div className="pt-6">
                        <h1 className="pb-3 text-lg font-bold font-rubik">Star</h1>
                        <div class="flex items-center mb-4">
                            <input onChange={(e) => filterDataRating(e.target.value)} id="default-radio-1" type="radio" value="1" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="font-rubik text-base hover:underline text-gray-600 rating font-bold pl-2">
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input onChange={(e) => filterDataRating(e.target.value)} id="default-radio-1" type="radio" value="2" name="default-radio" class="w-6 h-6 rating text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="font-rubik text-base hover:underline text-gray-600 rating font-bold pl-2" >
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input onChange={(e) => filterDataRating(e.target.value)} id="default-radio-1" type="radio" value="3" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="font-rubik text-base hover:underline text-gray-600 rating font-bold pl-2" >
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input onChange={(e) => filterDataRating(e.target.value)} id="default-radio-1" type="radio" value="4" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="font-rubik text-base hover:underline text-gray-600 rating font-bold pl-2" >
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input onChange={(e) => filterDataRating(e.target.value)} id="default-radio-1" type="radio" value="5" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="font-rubik text-base hover:underline text-gray-600 rating font-bold pl-2" >
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </label>
                        </div>
                    </div>

                    {/* size */}
                    <div className="pt-6">
                        <h1 className="pb-3 text-lg font-bold font-rubik">Size</h1>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterDataSize(e.target.value)} id="default-radio-1" type="radio" value="SM" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">SM</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterDataSize(e.target.value)} id="default-radio-1" type="radio" value="XL" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">XL</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterDataSize(e.target.value)} id="default-radio-1" type="radio" value="S" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">S</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterDataSize(e.target.value)} id="default-radio-1" type="radio" value="M" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">M</h1>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input onChange={(e) => filterDataSize(e.target.value)} id="default-radio-1" type="radio" value="L" name="default-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <h1 className="text-base font-bold text-gray-600 font-rubik hover:underline">L</h1>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="col-span-3 pt-2 pl-8">
                    <div className="flex items-center justify-between h-fit">
                        <div className="flex items-center gap-2">
                            <div>
                                <CgMenuGridR className="p-1 text-4xl border hover:bg-black hover:text-white" />
                            </div>
                            <div>
                                <IoMdMenu className="p-1 text-4xl border hover:bg-black hover:text-white" />
                            </div>
                        </div>
                        <div>
                            <select id="countries" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>What do you want</option>
                                <option value="CA">high</option>
                                <option value="FR">less</option>
                            </select>
                        </div>
                    </div>

                    {/* all card */}

                    <>
                        {
                            menu?.length > 0 ? <div>
                                <div data-aos="fade-up"
                                    data-aos-anchor-placement="top-center" className="grid items-center gap-6 pt-6 md:grid-cols-3 pb-14">
                                    {
                                        menu.map(item =>
                                            <div className="">
                                                <Link to={`/menusdetails/${item?._id}`}>
                                                    <img className="w-full rounded-xl" src={item.image} alt="" />
                                                </Link>
                                                <div>
                                                    <h1 className="text-xl font-bold">{item.name}</h1>
                                                    <div className="flex justify-between pt-2 pb-1">
                                                        <h2 className="card-title">
                                                            <Rating style={{ maxWidth: 115 }}
                                                                value={item.ratting}
                                                                readOnly />
                                                        </h2>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <h1 className="text-lg font-bold">{item.price}</h1>
                                                        <div className=" bg-[#edededb1] p-3 rounded-full left-14 ">
                                                            <LuShoppingCart />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>


                            </div> : <NodataHere></NodataHere>
                        }
                    </>



                </div>
            </div>
        </div>
    )
}

export default Shop