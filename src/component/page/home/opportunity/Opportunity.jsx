import icon from "../../../../../public/image/icon1.png"
import icons from "../../../../../public/image/icon3.png"


const Opportunity = () => {
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" className="px-12 pt-10">
            <div className="md:flex justify-center">
                <div className="flex items-center">
                    <img className="w-44" src={icon} alt="" />
                    <div className="-mt-6 -ml-7">
                        <h1 className="text-xl font-bold pb-1">Free Delivery</h1>
                        <p className="font-medium text-gray-600">No more additional fees other than <br /> what you pay for what you want</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-44" src={icons} alt="" />
                    <div className="-mt-6 -ml-7">
                        <h1 className="text-xl font-bold pb-1">Secure Transaction</h1>
                        <p className="font-medium text-gray-600">we are a varied marketplace <br /> since 201 Safety guarantee.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunity