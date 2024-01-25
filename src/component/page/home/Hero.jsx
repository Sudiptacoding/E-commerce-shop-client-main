import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import banner1 from "../../../../public/image/banner1.png"
import banner2 from "../../../../public/image/banner2.png"
import banner3 from "../../../../public/image/banner3.png"
import banner4 from "../../../../public/image/banner4.png"
import category1 from "../../../../public/image/category1.png"
import category2 from "../../../../public/image/category2.png"
import category3 from "../../../../public/image/category3.png"
import category4 from "../../../../public/image/category4.png"
import category5 from "../../../../public/image/category5.png"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div>
                <ReactCarousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    <div>
                        <img src={banner3} alt="" />
                    </div>
                    <div>
                        <img src={banner4} alt="" />
                    </div>
                </ReactCarousel>
            </div>

            {/* category naem */}
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-center" className="grid md:flex grid-cols-3 justify-center gap-4 pt-8 items-center">
                <Link to="/shop">
                    <div className="cursor-pointer rounded-md px-4 pt-4 pb-3 w-fit hover:scale-105 transition-all duration-200 border-white shadow">
                        <img className="bg-center rounded-md" src={category1} alt="" />
                        <h1 className="text-center pt-2 text-xl font-rubik font-bold">Shirt</h1>
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="cursor-pointer rounded-md px-4 pt-4 pb-3 w-fit hover:scale-105 transition-all duration-200 border-white shadow">
                        <img className="bg-center rounded-md" src={category2} alt="" />
                        <h1 className="text-center pt-2 text-xl font-rubik font-bold">Beg</h1>
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="cursor-pointer rounded-md px-4 pt-4 pb-3 w-fit hover:scale-105 transition-all duration-200 border-white shadow">
                        <img className="bg-center rounded-md" src={category3} alt="" />
                        <h1 className="text-center pt-2 text-xl font-rubik font-bold">T-shirt</h1>
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="cursor-pointer rounded-md px-4 pt-4 pb-3 w-fit hover:scale-105 transition-all duration-200 border-white shadow">
                        <img className="bg-center rounded-md" src={category4} alt="" />
                        <h1 className="text-center pt-2 text-xl font-rubik font-bold">hoodi</h1>
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="cursor-pointer rounded-md px-4 pt-4 pb-3 w-fit hover:scale-105 transition-all duration-200 border-white shadow">
                        <img className="bg-center rounded-md" src={category5} alt="" />
                        <h1 className="text-center pt-2 text-xl font-rubik font-bold">Cap</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero