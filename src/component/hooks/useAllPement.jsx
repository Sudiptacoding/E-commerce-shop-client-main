import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAllPement = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const axiosData = UseAxiosPublic();
    const { isPending, error, data: allpement, refetch } = useQuery({
        queryKey: ['allpement'],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/allpementitem`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, allpement, refetch }
};

export default useAllPement;