import { Link, useLoaderData, useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import member2 from "../../../../public/image/member2.png"
import paypal from "../../../../public/image/paypal.png"
import visa from "../../../../public/image/visa.png"
import stripe from "../../../../public/image/stripe.png"
import { LuShoppingCart } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GoCheckbox } from "react-icons/go";
import FronInDetails from "./FronInDetails";
import UseAuth from "../../hooks/UseAuth";
import UserAxiosSecure from "../../hooks/UserAxiosSecure";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseMenus from "../../hooks/UseMenus";
import StarRatings from "react-star-ratings";
import useAllAddtoLove from "../../hooks/useAllAddtoLove";
import useAllAddtoCard from "../../hooks/useAllAddtoCard";


const MenusDetails = (cata) => {
    const [menus] = UseMenus();
    const { refetch: lovereface } = useAllAddtoLove()
    const { refetch: addcardreface } = useAllAddtoCard()

    const { user } = UseAuth();
    const axiosData = UseAxiosPublic()
    const axiosSecure = UserAxiosSecure();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [tabIndex, setTabIndex] = useState(0)
    const data = useLoaderData();
    const [menusdetail, setMenusdetail] = useState(data)
    const [sameMenu, setSameMenu] = useState([])

    const handelDetails = (item) => {
        setMenusdetail(item)
    }


    useEffect(() => {
        axiosData.get(`/sameitems?category=${data?.category}`)
            .then(res => {
                setSameMenu(res.data)
            })
    }, [data])


    const handleaddtoCart = (item) => {
        const email = user?.email;
        const { _id, ...dataWithoutId } = item;
        const data = { ...dataWithoutId, email };
        console.log(data)
        axiosSecure.post('/addtocart', data)
            .then(res => {
                addcardreface()
                Swal.fire({
                    title: "Good job!",
                    text: "Item successfully added",
                    icon: "success"
                });

            })
    }


    const handleaddtoLove = (item) => {
        const email = user?.email;
        const { _id, ...dataWithoutId } = item;
        const data = { ...dataWithoutId, email };
        axiosSecure.post('/addtolove', data)
            .then(res => {
                lovereface()
                Swal.fire({
                    title: "Good job!",
                    text: "Item successfully added",
                    icon: "success"
                });

            })
    }

    const handelBuyNow = (item) => {
        axiosSecure.post('/buynow', [{ ...item, quantity: selectedQuantity }])
            .then(res => {
                window.location.replace(res.data.url)
            })
    }


    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="container mx-auto">
            <div className="grid gap-12 px-10 pt-10 md:grid-cols-2">
                <div className="">
                    <ReactCarousel autoPlay infiniteLoop showThumbs={true}>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail?.image?.[0]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail?.image?.[1]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail?.image?.[2]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail?.image?.[3]} alt="" />
                        </div>
                    </ReactCarousel>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 font-rubik">{menusdetail?.name}</h1>
                    <h1 className="py-2 text-lg font-medium font-rubik">Cattegory: <span className="text-xl font-bold font-rubik">{menusdetail?.category}</span> </h1>
                    <h1 className="py-1 text-2xl text-gray-600 font-rubik">{menusdetail?.title}</h1>
                    <h2 className="card-title">
                        <StarRatings
                            rating={menusdetail?.adminRating}
                            starDimension="25px"
                            starSpacing="5px"
                        />
                    </h2>
                    <h1 className="py-2 text-2xl font-bold font-rubik">${menusdetail?.price}</h1>
                    <h1 className="pt-2 pb-2 text-xl font-bold font-rubik">Select Size</h1>
                    <div className="flex gap-2">
                        <h1 className="px-4 py-3 text-xl font-medium border hover:bg-black hover:text-white hover:border-black w-14 rounded-xl">XS</h1>
                        <h1 className="px-4 py-3 pl-5 text-xl font-medium border hover:bg-black hover:text-white hover:border-black w-14 rounded-xl">S</h1>
                        <h1 className="px-4 py-3 text-xl font-medium border hover:bg-black hover:text-white hover:border-black w-14 rounded-xl">M</h1>
                        <h1 className="px-4 py-3 pl-5 text-xl font-medium border hover:bg-black hover:text-white hover:border-black w-14 rounded-xl">L</h1>
                        <h1 className="px-4 py-3 text-xl font-medium border hover:bg-black hover:text-white hover:border-black w-14 rounded-xl">XL</h1>
                    </div>

                    <h1 className="pt-6 pb-2 text-xl font-bold font-rubik">Select Color</h1>
                    <div className="flex gap-2">
                        <input type="radio" name="radio-5" className="w-10 h-10 radio radio-accent" />
                        <input type="radio" name="radio-5" className="w-10 h-10 radio radio-error" />
                        <input type="radio" name="radio-5" className="w-10 h-10 radio radio-success" />
                        <input type="radio" name="radio-5" className="w-10 h-10 radio radio-primary" />
                    </div>
                    <h1 className="pt-6 pb-2 text-xl font-bold font-rubik">Quantity:</h1>
                    <div className="flex">
                        <div className="text-center border rounded-md ">
                            <button onClick={() => {
                                selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)
                            }}
                                className="px-4 pt-1 pb-2 text-xl border-r-2">-</button> <span className="px-4 py-2 text-xl">{selectedQuantity}</span> <button
                                    onClick={() => {
                                        selectedQuantity < 10 && setSelectedQuantity(selectedQuantity + 1)
                                    }}
                                    className="px-4 pt-1 pb-2 text-xl border-l-2 ">+</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pt-8">
                        <button onClick={() => handleaddtoLove(menusdetail)} data-tip="Love" className="px-3 py-3 text-xl border-2 tooltip hover:border-black hover:bg-black hover:text-white font-rubik"><FaRegHeart /></button>
                        <button onClick={() => handleaddtoCart(menusdetail)} className="px-16 py-2 text-xl border-2 hover:border-black hover:bg-black hover:text-white font-rubik">Add to Cart</button>
                        <button onClick={() => handelBuyNow(menusdetail)} className="px-16 py-2 text-xl text-white bg-black border-2 border-black hover:border-black font-rubik">Buy Now</button>
                    </div>
                    <hr className="mt-6" />
                    {/* share */}
                    <div className="flex items-center gap-4 pt-6">
                        <h1 className="pb-2 text-2xl font-rubik">Share:</h1>
                        <div className="flex gap-2">
                            <a href="https://www.facebook.com/">< CiFacebook className="p-2 text-5xl border hover:bg-black hover:text-white" /></a>
                            <a href="https://twitter.com/asafayet21">< FaTwitter className="p-2 text-5xl border hover:bg-black hover:text-white" /></a>
                            <a href="https://www.linkedin.com/">< FaLinkedin className="p-2 text-5xl border hover:bg-black hover:text-white" /></a>
                            <a href="https://www.instagram.com/asafayet21/">< FaInstagramSquare className="p-2 text-5xl border hover:bg-black hover:text-white" /></a>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex items-center gap-2 pt-8">
                        <GoCheckbox className="text-3xl" />
                        <h1 className="text-lg text-gray-600 font-rubik">25 days easy returns</h1>
                    </div>
                    <div className="bg-[#f2f2f2] flex gap-3 items-center py-2 pl-3 mt-4">
                        <p className="font-rubik">Guaranteed safe <br /> & secure checkout</p>
                        <img className="w-20 h-8" src={paypal} alt="" />
                        <img className="w-20 h-8" src={visa} alt="" />
                        <img className="w-20 h-8" src={stripe} alt="" />
                    </div>
                </div>
            </div>
            <hr className="mt-6" />
            {/* review and detaisl section */}
            <div className="px-10 pt-16">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="text-center">
                        <TabList>
                            <div className="flex justify-center gap-6">
                                <Tab className="px-6 py-2 border hover:bg-black hover:text-white font-rubik">Details</Tab>
                                <Tab className="px-6 py-2 border hover:bg-black hover:text-white font-rubik">Customer Review</Tab>
                            </div>
                        </TabList>
                    </div>
                    <TabPanel>
                        <h1 className="pb-2 text-2xl font-bold font-rubik">Product Details</h1>
                        <h2 className="w-[800px]">{menusdetail.details}</h2>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div>
                                {
                                    menusdetail?.customerReviews?.map((review, index) =>
                                        <div key={review.id}>
                                            <div>
                                                <p className="bg-teal-50 rounded-md text-lg text-[#41b6bf] font-bold w-fit px-2">{index + 1}</p>
                                                <div className="w-full gap-16 pt-8 pb-8 md:flex">
                                                    <div className="flex items-center gap-4">
                                                        <img className="w-16 h-16 rounded-full" src={review?.profileimg} alt="" />
                                                        <div>
                                                            <h1 className="font-bold pb-2 text-xl w-[200px]">{review?.name}</h1>
                                                            <h2 className="card-title">
                                                                <StarRatings
                                                                    rating={review?.rating}
                                                                    starDimension="25px"
                                                                    starSpacing="5px"
                                                                />
                                                            </h2>
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className=" gap-9 text-">
                                                            <h1 className="pb-4 text-xl font-medium text-black">{review?.description}</h1>
                                                            <div className="grid grid-cols-2">
                                                                <p className="justify-start w-full ">{review.date}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="pb-4" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <FronInDetails id={menusdetail?._id}></FronInDetails>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* anather product */}
            <div className="px-10 pt-16">
                <hr />
                <h1 className="pt-8 pb-1 text-3xl font-bold text-center font-rubik">Related Products</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="grid items-center gap-6 pt-6 pb-12 md:grid-cols-4">
                    {
                        sameMenu?.map(detail =>
                            <div onClick={() => handelDetails(detail)} key={detail._id}>
                                <div >
                                    <img className="w-full rounded-xl" src={detail?.image} alt="" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">{detail?.name?.length > 30 ? detail.name?.slice(0, 30) + '...' : detail.name}</h1>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-lg font-bold">${detail.price}</h1>
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

export default MenusDetails