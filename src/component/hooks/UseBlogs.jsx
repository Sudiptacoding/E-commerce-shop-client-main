import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseBlogs = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: blogs = [], isPending: loading, refetch } = useQuery({
        queryKey: ['blogs', 'blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs');
            return res.data;
        }
    })
    return [blogs, refetch, loading]
}

export default UseBlogs