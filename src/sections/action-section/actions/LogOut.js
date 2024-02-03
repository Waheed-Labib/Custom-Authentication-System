import React from 'react';

const LogOut = ({ setUser }) => {
    return (
        <div className='min-h-[50vh] md:min-h-screen bg-base-200 flex items-center justify-center'>
            <button onClick={() => setUser(null)} className='bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-5 rounded'>Log Out</button>
        </div>
    );
};

export default LogOut;