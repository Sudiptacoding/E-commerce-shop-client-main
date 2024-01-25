import React from 'react'
import instagram1 from "../../../../../public/image/instagram1.png"
import instagram2 from "../../../../../public/image/instagram2.png"
import instagram3 from "../../../../../public/image/instagram3.png"
import instagram4 from "../../../../../public/image/instagram4.png"
import instagram5 from "../../../../../public/image/instagram5.png"


const InstagramSection = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className='px-12 pt-20'>
            <h1 className="text-3xl font-bold pb-4 font-rubik  "> <span className='underline decoration-orange-500 underline-offset-8'>More Itesm In</span> Instagram</h1>
            <div className="grid gap-5 pb-8 md:grid-cols-5">
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <a href="https://www.instagram.com/asafayet21/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                        <img className="w-[330px] transition duration-300 ease-in-out hover:scale-110 h-[230px] mb-4 rounded-2xl" src={instagram1} alt="Louvre" />
                    </a>
                </div>
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <a href="https://www.instagram.com/asafayet21/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                        <img className="w-[330px] transition duration-300 ease-in-out hover:scale-110 h-[230px] mb-4 rounded-2xl" src={instagram2} alt="Louvre" />
                    </a>
                </div>
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <a href="https://www.instagram.com/asafayet21/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                        <img className="w-[330px] transition duration-300 ease-in-out hover:scale-110 h-[230px] mb-4 rounded-2xl" src={instagram5} alt="Louvre" />
                    </a>
                </div>
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <a href="https://www.instagram.com/asafayet21/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                        <img className="w-[330px] transition duration-300 ease-in-out hover:scale-110 h-[230px] mb-4 rounded-2xl" src={instagram4} alt="Louvre" />
                    </a>
                </div>
                <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <a href="https://www.instagram.com/asafayet21/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                        <img className="w-[330px] transition duration-300 ease-in-out hover:scale-110 h-[230px] mb-4 rounded-2xl" src={instagram3} alt="Louvre" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default InstagramSection