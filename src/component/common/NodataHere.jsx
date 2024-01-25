import React from 'react';
import oops from '../../../public/image/oops.png'
import { Link } from 'react-router-dom';

const NodataHere = () => {
    return (
        <div className='text-center p-16 justify-center pt-24 w-[600px]'>
            <img className='justify-center text-center pb-6  w-[600px]' src={oops} alt="" />
            <Link to="/">
                <button className='bg-orange-600 hover:bg-white hover:border-2 hover:border-black hover:text-black hover:font-medium text-white p-3 px-6 rounded-lg  '>Back To Home</button>
            </Link>
        </div>
    );
};

export default NodataHere;