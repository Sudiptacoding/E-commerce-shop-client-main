import { Link } from "react-router-dom"
import banner from "../../../../public/image/banner.png"
import metting from "../../../../public/image/metting.png"
import store from "../../../../public/image/store.png"
import member1 from "../../../../public/image/member1.png"
import member2 from "../../../../public/image/member2.png"
import member3 from "../../../../public/image/member3.png"
import member4 from "../../../../public/image/member4.png"


const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center py-24" style={{ backgroundImage: `url(${banner})` }}>
                <Link to="/">
                    <button className="text-xl font-medium px-6 py-2 border-black border hover:bg-black rounded-md hover:text-white">Home</button>
                </Link>
                <h1 className="text-gray-800 text-4xl font-rubik font-bold pt-2">Welcome to The About</h1>
            </div>

            {/* aboutus */}
            <div className="pt-14 px-12">
                <h1 className="text-4xl font-bold font-rubik pb-4">Well-coordinated teamwork <br /> speaks about us</h1>
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="w-full pb-6" src={metting} alt="" />
                <p data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="text-xl pb-16">We are thrilled to offer you a wide range of product that you won't find anywhere alse. Whether you're shoppin for.
                    clothig, accessories, gadgets, or home decor, we have something for everyone <br /><br />
                    Our commitment to quality is reflected in every product we offer. we work with top suplicrs adn manusfacturers to
                    ensure that every items we sell meets oru high standerds for derablitity, performance, and style. And with a user,
                    Our commitment to quality is reflected in every product we offer. we work with top suplicrs adn manusfacturers to
                    ensure that every items we sell meets oru high standerds for derablitity, performance, and style. And with a user,
                    Our commitment to quality is reflected in every product we offer. we work with top suplicrs adn manusfacturers to
                    ensure that every items we sell meets oru high standerds for derablitity, performance, and style. And with a user,
                </p>

                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="text-center justify-center flex gap-12">
                    <div className="text-start">
                        <h1 className="text-3xl font-rubik font-bold">375+</h1>
                        <h1 className="text-xl font-rubik font-medium">Happy Customers</h1>
                    </div>
                    <div className="text-start">
                        <h1 className="text-3xl font-rubik font-bold">2015</h1>
                        <h1 className="text-xl font-rubik font-medium">Founding Year</h1>
                    </div>
                    <div className="text-start">
                        <h1 className="text-3xl font-rubik font-bold">170+</h1>
                        <h1 className="text-xl font-rubik font-medium">Product Orders</h1>
                    </div>
                    <div className="text-start">
                        <h1 className="text-3xl font-rubik font-bold">70+</h1>
                        <h1 className="text-xl font-rubik font-medium">Quality Products</h1>
                    </div>
                </div>

                {/* online store */}
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="flex py-24 justify-between">
                    <div>
                        <h1 className="text-4xl font-rubik font-bold">About our <br />Online Store</h1>
                        <p className="pt-4">At our e-commerce site, we are possionate about providing <br />our customers with the best possible shopping experience. <br />From our extensive product selection to our exceptioal <br /> customaer service, we are committed to exceeding your <br />expectations.
                            <br /><br />so start browsing today and find the perfect products to suit <br />your needs!
                        </p>
                        <h1 className="font-rubik text-8xl text-gray-300 pt-8">2015</h1>
                    </div>
                    <img src={store} alt="" />
                </div>

                {/* team member */}
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" className="text-center justify-center">
                    <h1 className="text-4xl font-medium">Our Team</h1>
                    <p className="pb-8">There are many Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex justify-center items-center gap-8 pb-8">
                        <div>
                            <img className="w-[160px]" src={member1} alt="" />
                            <p className="text-xl py-1 font-medium">Safayet Ahmed</p>
                            <p>Team Member</p>
                        </div>
                        <div>
                            <img className="w-[160px]" src={member2} alt="" />
                            <p className="text-xl py-1 font-medium">Rakibull Hasan</p>
                            <p>Team Member</p>
                        </div>
                        <div>
                            <img className="w-[160px]" src={member3} alt="" />
                            <p className="text-xl py-1 font-medium">Yeasing Arafat</p>
                            <p>Team Member</p>
                        </div>
                        <div>
                            <img className="w-[160px]" src={member4} alt="" />
                            <p className="text-xl py-1 font-medium">Tanvir Hosain</p>
                            <p>Team Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs