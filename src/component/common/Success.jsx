import React from 'react';

import Confetti from 'react-confetti'

const Success = () => {

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Confetti
            // width={1000}
            // height={1000}
            />
            <h1>Pement successfully</h1>
        </div>
    );
};

export default Success;