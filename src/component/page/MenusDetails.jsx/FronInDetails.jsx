import moment from "moment"
import { useContext, useState } from "react"
import toast from "react-hot-toast"
import StarRatings from "react-star-ratings"
import { AuthContext } from "../../provider/AuthProvider"
import UseAxiosPublic from "../../hooks/UseAxiosPublic"


const FronInDetails = ({ id }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const axiosData = UseAxiosPublic()
    const [ratings, setRating] = useState(0)
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!ratings) {
            return toast.error("Please add rating")
        }
        const rating = ratings;
        const profileimg = user?.photoURL;
        const name = user?.displayName;
        const description = e.target.review.value;
        const date = moment().format('l');
        const data = { profileimg, name, description, date, rating }

        axiosData.patch(`/sameitems/${id}`, data)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className="pt-4 pb-10">
            <h1 className="text-2xl font-bold font-rubik">Review this product</h1>
            <p className="py-1 font-rubik">your email address will not be published. Required fields are market*</p>
            <div className="flex gap-4 pt-2">
                <p className="font-rubik">Your Ratting:</p>
                <div className="rating">
                    <StarRatings
                        rating={ratings}
                        starRatedColor="blue"
                        changeRating={setRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="5px"
                    />
                </div>
            </div>
            <form onSubmit={handelSubmit}  >
                <div className="pt-2">
                    <h1 className="pb-1 font-medium font-rubik">Your Review</h1>
                    <textarea name="review" className="w-full max-w-xl pb-12 textarea textarea-bordered" placeholder="Write your review here..." ></textarea>
                </div>
                <button className="px-16 py-2 mt-8 text-xl border-2 hover:border-black hover:bg-black hover:text-white font-rubik">Submit</button>
            </form>
        </div>
    )
}

export default FronInDetails