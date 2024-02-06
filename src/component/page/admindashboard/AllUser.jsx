import React from 'react'
import useAllUsers from '../../hooks/useAllUsers'
import Swal from 'sweetalert2'
import UserAxiosSecure from '../../hooks/UserAxiosSecure'
import toast from 'react-hot-toast'

const AllUser = () => {
    const { isPending, error, alluser, refetch } = useAllUsers()
    console.log(alluser)
    const axiosData = UserAxiosSecure()

    const handelUpdate = (item) => {
        axiosData.patch(`/user/${item._id}`)
            .then(res => {
                toast.success('Successfully update!')
                refetch()
            })
    }


    const handelDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/user/${item._id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }
    return (
        <div class="relative ml-3 w-full overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            User Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            User Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Make Admin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser?.map((item, i) => {
                            return <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className='w-16 h-16 rounded-full' src={item?.img} alt="" />
                                </th>
                                <td class="px-6 py-4">
                                    {item?.name}
                                </td>
                                <td class="px-6 py-4">
                                    {item?.email}
                                </td>
                                {
                                    item?.status === 'user' ? <td onClick={() => handelUpdate(item)} class="px-6 py-4 cursor-pointer">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">User</a>
                                    </td> : <td  class="px-6 py-4 cursor-pointer">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Admin</a>
                                    </td>
                                }

                                {
                                    item?.status === 'user' && <td onClick={() => handelDelete(item)} class="px-6 py-4 cursor-pointer">
                                        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                }

                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}

export default AllUser