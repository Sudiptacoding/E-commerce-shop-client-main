import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import { MdPreview } from 'react-icons/md';

const ProfilePicture = () => {
    const [image, setImage] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
            const imageUrl = URL.createObjectURL(file);
            document.cookie = `profileImage=${imageUrl}; path=/`;

            setImage(imageUrl);
            setDialogVisible(true);
        } else {
            setImage(null);
            setDialogVisible(false);
        }
    };

    // Fetch the image from cookies on component mount
    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const profileImageCookie = cookies.find(cookie => cookie.startsWith("profileImage="));

        if (profileImageCookie) {
            const imageUrl = profileImageCookie.split("=")[1];
            setImage(imageUrl);
        }
    }, []);


    return (
        <div className='profile_img text-center p-4'>
            <div className='flex flex-col justify-center items-center'>
                <img
                className='lg:w-[200px] md:w-[120px]  sm:w-[100px] w-[80px] '
                    style={{
                       
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid green",
                        cursor: "pointer",
                    }}
                    src={image}
                    alt="Profile"
                    onClick={() => setDialogVisible(true)}
                />


                <div class="">
                    <label for="dropzone-file" class="flex p-[6px] absolute top-28 lg:ml-14 ml-4 rounded-full  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium  text-center me-2 mb-2">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://hugeicons.storage.googleapis.com/icons/camera-02-stroke-rounded.svg?type=svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#ffffff">
                                <path d="M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z" stroke="#ffffff" stroke-width="1.5"></path>
                                <path d="M11.9998 6H12.0088" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" onChange={handleImageChange} />
                    </label>
                </div>


            </div>
        </div>
    );
};

export default ProfilePicture;
