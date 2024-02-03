import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const WelcomeSection = () => {

    const { isLoggedIn } = useContext(AuthContext)

    const welcomeGuest = {
        header: 'Custom Authentication & Authorization System',
        paragraph: 'Here you can signup, login & logout. Your password is secured by bcryptjs. And your data is protected by json web token.'
    }

    const welcomeUser = '';

    return (
        <div className='w-full md:min-h-screen flex items-center justify-center' >
            {
                isLoggedIn ?
                    <p>{welcomeUser}</p>
                    :
                    <div className='w-2/3'>
                        <h2 className='text-4xl font-bold text-white'>{welcomeGuest.header}</h2>
                        <p className='mt-3 text-justify'>{welcomeGuest.paragraph}</p>
                    </div>

            }
        </div >
    );
};

export default WelcomeSection;