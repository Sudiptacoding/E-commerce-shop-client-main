import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const UseMenus = () => {
    const axiosPublic = UseAxiosPublic();
    
    const { data: menus  = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })
    return [menus, refetch, loading]
};

export default UseMenus;
