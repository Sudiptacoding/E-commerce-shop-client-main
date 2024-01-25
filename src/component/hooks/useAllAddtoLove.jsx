import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAllAddtoLove = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const axiosData = UseAxiosPublic();
    const { isPending, error, data: addtolove, refetch } = useQuery({
        queryKey: ['useAllAddtoLove'],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/addtolove?email=${user?.email}`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, addtolove, refetch }
};

export default useAllAddtoLove;