import React from 'react';

function Success() {
    return (
        <div className='bg-emerald-100 h-screen flex items-center justify-center'>
            <h1 className='text-5xl bg-emerald-500 text-white p-4 rounded-lg'>
                You are successfully logged in <span className='animate-pulse'>❤️</span>
            </h1>
        </div>
    );
}

export default Success;
