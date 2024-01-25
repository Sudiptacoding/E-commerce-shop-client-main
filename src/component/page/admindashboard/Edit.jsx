

const Edit = () => {
    return (
        <div className="w-full">
            <div className="px-12">
                <div className="py-12 text-center">
                    <h1 className="pb-2 text-2xl font-bold text-blue-600">Add some Itesm</h1>
                    <p className="text-xl">if you want to add some items you can add.</p>
                </div>
                <form>
                    <div className="w-full my-6 form-control">
                        <label className="label">
                            <span className="text-lg font-medium">Items Name</span>
                        </label>
                        <input
                            type="text"
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
                                type="text"
                                placeholder="price"
                                {...('Ratings', { required: true })}
                                className="w-full input input-bordered" />
                        </div>
                        <div className="w-full my-6 form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Title About product</span>
                            </label>
                            <input
                                type="text"
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
                            <select defaultValue="default" {...('category', { required: true })}
                                className="w-full select select-bordered">
                                <option disabled value="default">Select a category</option>
                                <option value="shirt">shirt</option>
                                <option value="Beg">Beg</option>
                                <option value="T-shirt">T-shirt</option>
                                <option value="hoodi">hoodi</option>
                                <option value="cap">cap</option>
                            </select>
                        </div>

                        {/* price */}
                        {/* <div className="w-full my-6 form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Add Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...('Price', { required: true })}
                                className="w-full input input-bordered" />
                        </div> */}
                    </div>
                    {/* recipi */}
                    <label className="form-control">
                        <div className="label">
                            <span className="text-lg font-medium">Product Details</span>
                        </div>
                        <textarea
                            {...('descriptionOne', { required: true })}
                            className="h-24 textarea textarea-bordered"
                            placeholder="add details about product"></textarea>
                    </label>
                    <div className="w-full my-6 form-control">
                        <input {...('images', { required: true })} type="file" className="w-full max-w-xs file-input" />
                    </div>
                    <div className="text-center">
                        <button className="btn hover:bg-blue-600 hover:border-blue-600 hover:text-white w-[300px]">
                            Update items
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit