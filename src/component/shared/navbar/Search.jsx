import { IoSearchSharp } from "react-icons/io5";


const Search = () => {
    return (
        <form className="relative  rounded-md">
            <input className="py-2 px-4 rounded-md   font-medium border w-full  outline-none" type="text" name="" id="" placeholder="Search" required />
            <button className="text-xl font-bold absolute right-2 bottom-2 lg:bottom-3" type="submit"><IoSearchSharp /></button>
        </form>
    )
}

export default Search