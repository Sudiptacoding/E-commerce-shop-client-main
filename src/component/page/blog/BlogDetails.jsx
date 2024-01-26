import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BlogDetails = () => {
    const blogdata = useLoaderData();
    const { id } = useParams();
    const data = blogdata.find(blogdata => blogdata._id === id);
    console.log(data)
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className='container mx-auto pt-10 px-10'>
            <img className='w-full' src={data.image1} alt="" />
            <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2V4M6 2V4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.5 8H20.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 8H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{data.date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#141B34" stroke-width="1.5" />
                    </svg>
                    <p>{data.name}</p>
                </div>
            </div>
            <h1 className='text-xl font-rubik pt-4 font-normal py-3'>{data.title}</h1>
            <h1>{data.details}</h1>
            <p></p>
        </div>
    )
}

export default BlogDetails