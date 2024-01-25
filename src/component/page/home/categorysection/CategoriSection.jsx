import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import tshirt from "../../../../../public/image/t-shirt.png"



const CategoriSection = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className="bg-[#F6EFE9] px-12">
            <div className=" grid md:grid-cols-2 py-12 mb-16">
                <div className="flex gap-6 items-start">
                    <div>
                        <h1 className="font-rubik pb-2 text-3xl font-bold">Popular Categories</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.  Odit veniam deleniti aperiam</p>
                    </div>
                    <div>
                        <h1 className="font-rubik pb-2 text-3xl font-bold">Categories</h1>
                        <Link to="/shop">
                            <button className="flex mt-2 px-8 w-40 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">Cap <GoArrowRight className="hover:text-white text-2xl" />
                            </button>
                        </Link>
                        <Link to="/shop">
                            <button className="flex mt-2 px-8 w-40 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">Beg <GoArrowRight className="hover:text-white text-2xl" />
                            </button>
                        </Link>
                        <Link to="/shop">
                            <button className="flex mt-2 px-8 w-40 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">Shirt <GoArrowRight className="hover:text-white text-2xl" />
                            </button>
                        </Link>
                        <Link to="/shop">
                            <button className="flex mt-2 px-8 w-40 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">T-shirt <GoArrowRight className="hover:text-white text-2xl" />
                            </button>
                        </Link>
                        <Link to="/shop">
                            <button className="flex mt-2 px-8 w-40 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">Hoodie <GoArrowRight className="hover:text-white text-2xl" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-96 p-8 bg-no-repeat" style={{ backgroundImage: `url(${tshirt})` }}>
                    <h1 className="text-white text-2xl font-medium">STEP INTO SAVINGS</h1>
                    <h1 className="text-white text-4xl font-bold pt-2 pb-6">Fashion Sale with <br />Incredible <br />Discounts?</h1>
                    <Link to="/shop">
                        <button className="flex mt-2 px-8 w-52 hover:bg-black py-2 hover:text-white bg-[#ffffff] items-center text-xl font-medium gap-2">SHOP NOW<GoArrowRight className="hover:text-white text-2xl" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriSection