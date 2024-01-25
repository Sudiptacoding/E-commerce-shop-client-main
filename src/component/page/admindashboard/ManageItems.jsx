import React from 'react'
import { Link } from 'react-router-dom'

const ManageItems = () => {
    return (
        <div className=" w-full">
            <div className="py-12 text-center">
                <h1 className="pb-2 md:text-2xl text-xl font-bold text-blue-600">Add some Itesm</h1>
                <p className="md:text-xl">if you want to add some items you can add.</p>
            </div>
            <div class="relative ml-3 w-full overflow-x-auto sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Ratting
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Edit
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className='w-16 rounded-full h-16' src="" alt="" />
                            </th>
                            <td class="px-6 py-4">
                                Safayet Ahmed
                            </td>
                            <td class="px-6 py-4">
                                asafayet21@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                07/02/2004
                            </td>
                            <td class="px-6 py-4">
                                <Link to="/adminDashboard/edit">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </Link>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageItems