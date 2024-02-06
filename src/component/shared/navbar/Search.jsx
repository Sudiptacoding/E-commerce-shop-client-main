import { IoSearchSharp } from "react-icons/io5";
import UseMenus from "../../hooks/UseMenus";
import { useState } from "react";
import { Link } from "react-router-dom";


const Search = () => {
    const [menus, refetch, loading] = UseMenus()
    const [search, setSearch] = useState([])
    const [inputOn, setInputOn] = useState(false)
    const handelSearch = (e) => {
        const filr = menus?.filter(item => item.name.includes(e));
        setSearch(filr);
    }
    const handelOnInput = () => {
        setInputOn(true)
    }
    const handelOff = () => {
        setInputOn(false)
    }

    return (
        <form className="relative z-50 rounded-md">
            <input onFocus={() => handelOnInput()}  onChange={(e) => handelSearch(e.target.value)} className="relative w-full px-4 py-2 font-medium border rounded-md outline-none" type="text" name="" id="" placeholder="Search" required />
            {
                inputOn ? <span className={`absolute left-0  w-full overflow-y-scroll rounded-md no-scrollbar h-60 bg-white top-10 `}>
                    {search?.map((item, i) => {
                        return <Link onBlur={() => handelOff()}  to={`/menusdetails/${item?._id}`} key={i} className="z-50 flex items-center gap-5 px-5 py-2 cursor-pointer hover:bg-slate-200">
                            <img className="w-8 h-8 rounded-full" src={item?.image?.[0]} alt="" />
                            {item?.name}</Link>
                    })}
                </span> : <span className={`absolute left-0  w-full overflow-y-scroll rounded-md no-scrollbar hidden h-60 bg-white top-10 `}>
                    {search?.map((item, i) => {
                        return <Link to={`/menusdetails/${item?._id}`} key={i} className="z-50 flex items-center gap-5 px-5 py-2 cursor-pointer hover:bg-slate-200">
                            <img className="w-8 h-8 rounded-full" src={item?.image?.[0]} alt="" />
                            {item?.name}</Link>
                    })}
                </span>
            }

            <button className="absolute text-xl font-bold right-2 bottom-2 lg:bottom-3" type="button"><IoSearchSharp /></button>
        </form>
    )
}

export default Search