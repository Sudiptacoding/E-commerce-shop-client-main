
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAllUsers = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosData = UseAxiosPublic();
    const { isPending, error, data: alluser, refetch } = useQuery({
        queryKey: ['alluser'],
        enabled: !loading,
        queryFn: () =>
            axiosData.get(`/alluser`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, alluser, refetch }
};

export default useAllUsers;