import { Link } from "react-router-dom"
import banner from "../../../../public/image/banner.png"


const ConTact = () => {
    return (
        <div className="container mx-auto">
            {/* banner */}
            <div className="text-center mb-8 py-24" style={{ backgroundImage: `url(${banner})` }}>
                <Link to="/">
                    <button className="text-xl font-medium px-6 py-2 border-black border hover:bg-black rounded-md hover:text-white">Home</button>
                </Link>
                <h1 className="text-gray-800 text-4xl font-rubik font-bold pt-2">Welcome to The Contact</h1>
            </div>

            {/* contact info */}
            <div>
                <div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center">
                        <div className="justify-center md:flex gap-8">
                            <div className="flex items-center">
                                <img className="w-[140px]" src="https://i.ibb.co/WxjYVwx/Group-52.png" alt="" />
                                <div className="-ml-5 pb-7">
                                    <h1 className="text-xl font-bold">Email Us</h1>
                                    <h1 className="text-[#5c6161]">asafayet21@gmail.com</h1>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="w-[140px]" src="https://i.ibb.co/0KFRJc6/Group-53.png" alt="" />
                                <div className="-ml-5 pb-7">
                                    <h1 className="text-xl font-bold">Call Us</h1>
                                    <h1 className="text-[#5c6161]">(888) 555 - 6666</h1>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="w-[140px]" src="https://i.ibb.co/mGGwmwN/Group-54.png" alt="" />
                                <div className="-ml-5 pb-7">
                                    <h1 className="text-xl font-bold">Our Location</h1>
                                    <h1 className="text-[#5c6161]">102, Sylhet Sunamganj, 094837</h1>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-center" className="grid px-10 gap-6 pb-16 pt-8 md:grid-cols-2">
                            <div className="md:w-full w-[400px]">
                                <h1 className="text-4xl font-bold pb-6">Send Us A Message</h1>
                                <div className="flex gap-4 pb-4">
                                    <input type="name" name="name" placeholder="name" className="input input-bordered w-full " />
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full " />
                                </div>
                                <div className="flex gap-4 pb-4">
                                    <input type="number" placeholder="phone (optional)" className="input input-bordered w-full " />
                                </div>
                                <textarea placeholder="Message" name="message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>

                                <div className="card-actions justify-end">
                                    <button className=" mt-3 w-full py-3 border relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-black border-black text-black hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-black-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Send Message
                                        </span>
                                    </button>
                                </div>

                            </div>
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="top-center" className="">
                                <h1 className="text-4xl font-bold pb-6">Location</h1>
                                <div>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe className="md:w-full w-[400px]" width="564" height="410" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConTact