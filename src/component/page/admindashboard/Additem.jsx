import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import UserAxiosSecure from "../../hooks/UserAxiosSecure";

const Additem = () => {
    const axiosData = UserAxiosSecure()
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
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
        if (image1 && image2 && image3 && image4) {
            const name = e.target.name.value;
            const price = parseFloat(e.target.price.value);
            const title = e.target.title.value;
            const category = e.target.category.value;
            const size = e.target.size.value;
            const details = e.target.details.value;
            const rating = 0;
            const customerReviews = [];
            const image = [image1, image2, image3, image4]
            const data = { name, price, title, category, details, image, rating, customerReviews, size }
            axiosData.post('/item', data)
                .then(res => {
                    console.log(res.data)
                })
        } else {
            toast.error("Please upload your images")
        }

    }




    return (
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
                            <select name="category" defaultValue="default" {...('category', { required: true })}
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
                            <select name="size" defaultValue="default" {...('Size', { required: true })}
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
                            <span className="text-lg font-medium">Product Details</span>
                        </div>
                        <textarea name="details"
                            {...('descriptionOne', { required: true })}
                            className="h-24 textarea textarea-bordered"
                            placeholder="add details about product"></textarea>
                    </label>
                    <div class=" py-5">
                        <div class="flex items-center justify-center flex-wrap gap-4">
                            <div className="relative overflow-hidden">
                                <div className="relative group">
                                    <img class="h-32 w-[210px] cursor-pointer object-cover rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image1} alt="" />
                                    <div onClick={() => setImage1('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                        <div className=''>
                                            <TiDelete className='text-2xl text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden">
                                <div className="relative group">
                                    <img class="h-32 w-[210px] object-cover cursor-pointer rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image2} alt="" />
                                    <div onClick={() => setImage2('')} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100">
                                        <div className=''>
                                            <TiDelete className='text-2xl text-white' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden">
                                <div className="relative group">
                                    <img class="h-32 w-[210px] object-cover cursor-pointer rounded-lg border border-gray-300 transform transition-transform duration-300 group-hover:scale-110" src={image3} alt="" />
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
                        <input onChange={handelFileData} {...('images', { required: true })} type="file" className="w-full max-w-xs file-input" />
                    </div>

                    <div className="text-center">
                        <button className="btn hover:bg-blue-600 hover:border-blue-600 hover:text-white w-[300px]">
                            Add items
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Additem