import React from 'react';

const WelcomeSection = ({ isLoggedIn }) => {

    const welcomeGuest = {
        header: 'Custom Authentication & Authorization System',
        paragraph: 'Here you can signup, login & logout. Your password is secured by bcryptjs. And your data is protected by json web token.'
    }

    const welcomeUser = '';

    return (
        <div className='w-2/3' >
            {
                isLoggedIn ?
                    <p>{welcomeUser}</p>
                    :
                    <>
                        <h2 className='text-4xl font-bold text-white'>{welcomeGuest.header}</h2>
                        <p className='mt-3 text-justify'>{welcomeGuest.paragraph}</p>
                    </>

            }
        </div >
    );
};

export default WelcomeSection;