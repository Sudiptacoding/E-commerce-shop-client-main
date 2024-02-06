import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseMenus from '../../hooks/UseMenus'
import axios from 'axios'
import UserAxiosSecure from '../../hooks/UserAxiosSecure'
import { TiDelete } from 'react-icons/ti'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import StarRatings from 'react-star-ratings'

const ManageItems = () => {
    const [menus, refetch, loading] = UseMenus()

    const [editItem, setEditItem] = useState({})

    const handelEditItem = (item) => {
        console.log(item)
        setEditItem(item)
        setImage1(item?.image?.[0])
        setImage2(item?.image?.[1])
        setImage3(item?.image?.[2])
        setImage4(item?.image?.[3])
        document.getElementById('my_modal_10').showModal()
    }



    const axiosData = UserAxiosSecure()
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')

    const [ratings, setRating] = useState(0)
    const handelFileData = (e) => {
        const imgbbApiKey = '48262f7096c971f7f2f1b695ae2a6be0';
        const selectedFile = e.target.files[0];
        const inputType = selectedFile.type.split('/')[1];
        if (inputType !== 'png' && inputType !== 'jpeg') {
            toast.error("Please input jpeg/png image")
            return
        }
        const formData = new FormData();
        formData.append('image', selectedFile);
        axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            params: {
                key: imgbbApiKey,
            },
        })
            .then(response => {
                const imageUrl = response.data.data.url;
                if (!image1) {
                    setImage1(imageUrl)
                    toast.success('Successfully image Upload!')
                } else {
                    if (!image2) {
                        setImage2(imageUrl)
                        toast.success('Successfully image Upload!')
                    }
                    else {
                        if (!image3) {
                            setImage3(imageUrl)
                            toast.success('Successfully image Upload!')
                        }
                        else {
                            if (!image4) {
                                setImage4(imageUrl)
                                toast.success('Successfully image Upload!')
                            }
                        }
                    }
                }

            })
            .catch(error => {
                console.error(error);
            });
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if (image1 || editItem?.image?.[0] && image2 || editItem?.image?.[1] && image3 || editItem?.image?.[2] && image4 || editItem?.image?.[3]) {
            const name = e.target.name.value;
            const price = parseInt(e.target.price.value);
            const title = e.target.title.value;
            const category = e.target.category.value;
            const size = e.target.size.value;
            const details = e.target.details.value;
            const rating = ratings || editItem?.rating;
            const customerReviews = editItem?.customerReviews;
            const image = [image1 || editItem?.image?.[0], image2 || editItem?.image?.[1], image3 || editItem?.image?.[2], image4 || editItem?.image?.[3]]
            const data = { name, price, title, category, details, image, rating, customerReviews, size }
            axiosData.put(`/item/${editItem?._id}`, data)
                .then(res => {
                    refetch()
                    document.getElementById('my_modal_10').close()
                    e.target.reset()
                    setRating(0)
                    Swal.fire({
                        title: "Good job!",
                        text: "You item update successfully",
                        icon: "success"
                    });

                })
        } else {
            toast.error("Please upload your images")
        }

    }

    const handelDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/item/${item?._id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });


    }








    return (
        <div className="w-full ">
            <div className="py-12 text-center">
                <h1 className="pb-2 text-xl font-bold text-blue-600 md:text-2xl">Add some Itesm</h1>
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
                                Product size
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
                        {
                            menus?.length > 0 ? <>
                                {
                                    menus?.map((item, i) => {
                                        return <tr key={i}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img className='w-16 h-16 rounded-full' src={item?.image?.[0]} alt="" />
                                            </th>
                                            <td class="px-6 py-4">
                                                {item?.name}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item?.size}
                                            </td>
                                            <td class="px-6 py-4">
                                                {item?.price}
                                            </td>
                                            <td onClick={() => handelEditItem(item)} class="px-6 py-4">
                                                <a class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                            <td onClick={() => handelDelete(item)} class="px-6 py-4">
                                                <a class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    })
                                }
                            </> : <div className='flex items-center justify-center w-full text-2xl text-center top-10'><p className='text-center'>No item here</p></div>
                        }

                    </tbody>
                </table>
            </div>

            {/* Edit item */}

            <dialog id="my_modal_10" className="modal">
                <div className="w-11/12 max-w-5xl modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>
                    <div className="w-full">
                        <div className="px-12">
                            <div className="py-12 text-center">
                                <h1 className="pb-2 text-2xl font-bold text-blue-600">Add some Itesm</h1>
                                <p className="text-xl">if you want to add some items you can add.</p>
                            </div>
                            <form onSubmit={handelSubmit}>
                                <div className="w-full my-6 form-control">
                                    <label className="label">
                                        <span className="text-lg font-medium">Items Name</span>
                                    </label>
                                    <input
                                        defaultValue={editItem?.name}
                                        type="text"
                                        name="name"
                                        placeholder="product name"
                                        {...('name', { required: true })}
                                        required
                                        className="w-full input input-bordered" />
                                </div>
                                <div className="gap-6 md:flex">
                                    <div className="w-full my-6 form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium">Add Price</span>
                                        </label>
                                        <input
                                            defaultValue={editItem?.price}
                                            type="number"
                                            placeholder="price"
                                            name="price"
                                            {...('Ratings', { required: true })}
                                            className="w-full input input-bordered" />
                                    </div>
                                    <div className="w-full my-6 form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium">Title About product</span>
                                        </label>
                                        <input
                                            defaultValue={editItem?.title}
                                            type="text"
                                            name="title"
                                            placeholder="title"
                                            {...('location', { required: true })}
                                            className="w-full input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    {/* category */}
                                    <div className="w-full my-6 form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium">Category</span>
                                        </label>
                                        <select name="category" defaultValue={editItem?.category} {...('category', { required: true })}
                                            className="w-full select select-bordered">
                                            <option value="hoodie">shirt</option>
                                            <option value="shirt">Beg</option>
                                            <option value="t-shirt">T-shirt</option>
                                            <option value="beg">hoodi</option>
                                            <option value="cap">cap</option>
                                        </select>
                                    </div>
                                    <div className="w-full my-6 form-control">
                                        <label className="label">
                                            <span className="text-lg font-medium">Size</span>
                                        </label>
                                        <select name="size" defaultValue={editItem?.size} {...('Size', { required: true })}
                                            className="w-full select select-bordered">
                                            <option value="sm">SM</option>
                                            <option value="xl">XL</option>
                                            <option value="s">S</option>
                                            <option value="m">M</option>
                                            <option value="l">L</option>
                                        </select>
                                    </div>
                                </div>
                                {/* recipi */}

                                <label className="form-control">
                                    <div className="label">
                                        <span className="text-lg font-medium">Product rating {editItem?.rating || 0}⭐</span>
                                    </div>
                                    <StarRatings
                                        rating={ratings}
                                        starRatedColor="blue"
                                        changeRating={setRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </label>



                                <label className="form-control">
                                    <div className="label">
                                        <span className="text-lg font-medium">Product Details</span>
                                    </div>
                                    <textarea name="details"
                                        defaultValue={editItem?.details}
                                        {...('descriptionOne', { required: true })}
                                        className="h-24 textarea textarea-bordered"
                                        placeholder="add details about product"></textarea>
                                </label>
                                <div class=" py-5">
                                    <div class="flex items-center justify-center flex-wrap gap-4">
                                        <div className="relative overflow-hidden">
                                            <div className="relative group">
                                                <img class="h-32 w-[210px] cursor-pointer object-cover rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image1 || editItem?.image?.[0]} alt="" />
                                                <div onClick={() => setImage1('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                                    <div className=''>
                                                        <TiDelete className='text-2xl text-white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden">
                                            <div className="relative group">
                                                <img class="h-32 w-[210px] object-cover cursor-pointer rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image2 || editItem?.image?.[1]} alt="" />
                                                <div onClick={() => setImage2('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                                    <div className=''>
                                                        <TiDelete className='text-2xl text-white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden">
                                            <div className="relative group">
                                                <img class="h-32 w-[210px] object-cover cursor-pointer rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image3 || editItem?.image?.[2]} alt="" />
                                                <div onClick={() => setImage3('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                                    <div className=''>
                                                        <TiDelete className='text-2xl text-white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden">
                                            <div className="relative group">
                                                <img class="h-32 w-[210px] object-cover cursor-pointer rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image4} />
                                                <div onClick={() => setImage4('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                                    <div className=''>
                                                        <TiDelete className='text-2xl text-white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full my-6 form-control">
                                    <input onChange={handelFileData} {...('images')} type="file" className="w-full max-w-xs file-input" />
                                </div>

                                <div className="text-center">
                                    <button className="btn hover:bg-blue-600 hover:border-blue-600 hover:text-white w-[300px]">
                                        Add items
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default ManageItems