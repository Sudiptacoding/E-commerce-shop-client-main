import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Shop2items = () => {

    //Initiate AOS
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <div>
            <div className="px-12 w-full grid  lg:grid-cols-3 gap-5  ">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="lg:col-span-3">
                    <div className="grid md:grid-cols-3 pb-5 gap-5">
                        <div className="text-center md:col-span-2 rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/zfJccd1/Rectangle-34624333.png)' }}>
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <Link to="/shop">
                                    <button className="cursor-pointer rounded-md py-2 bg-[#ffffff6f] font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center rounded-[12px] w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/Lv0dpQ9/Rectangle-34624334.png)' }}>
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <Link to="/shop">
                                    <button className="cursor-pointer rounded-md py-2 bg-[#ffffff6f] font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3  gap-5">
                        <div className="text-center rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/svYQHdr/Rectangle-34624337.png)' }}>
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <Link to="/shop">
                                    <button className="cursor-pointer rounded-md py-2 bg-[#ffffff6f] font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center rounded-[12px] w-full md:col-span-2 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/ZY4WfKw/Rectangle-34624336.png)' }}>
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <Link to="/shop">
                                    <button className="cursor-pointer rounded-md py-2 bg-[#ffffff6f] font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop2items