import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAllAddtoCard = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosData = UseAxiosPublic();
    const { isPending, error, data: addtocard, refetch } = useQuery({
        queryKey: ['addtocartitem'],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/addtocart?email=${user?.email}`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, addtocard, refetch }
};

export default useAllAddtoCard;