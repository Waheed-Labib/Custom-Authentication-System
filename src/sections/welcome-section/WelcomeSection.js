import React, { useContext, useState } from 'react';
import { AuthContext } from 'context/AuthProvider';

const WelcomeSection = () => {

    const { user } = useContext(AuthContext)
    const [loggedInUser, setLoggedInUser] = useState(null)

    if (user) {
        fetch(`http://localhost:5000/users/${user._id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('custom-auth-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setLoggedInUser(data))
    }

    const welcomeGuest = {
        header: 'Custom Authentication & Authorization System',
        paragraph: 'Here you can signup, login & logout. Your password is secured by bcryptjs. And your data is protected by json web token.'
    }

    const welcomeUser = {
        header: `Hey, ${loggedInUser?.name}`,
        paragraph: 'We hope, you are enjoying our Custom Authentication & Authorization System.'
    }

    return (
        <div className='w-full mt-[30%] md:mt-0 md:min-h-screen flex items-center justify-center' >
            {
                user ?
                    <div className='w-2/3'>
                        <h2 className='text-4xl font-bold text-white'>{welcomeUser.header}</h2>
                        <p className='mt-3'>{welcomeUser.paragraph}</p>
                    </div>
                    :
                    <div className='w-2/3'>
                        <h2 className='text-4xl font-bold text-white'>{welcomeGuest.header}</h2>
                        <p className='mt-3'>{welcomeGuest.paragraph}</p>
                    </div>

            }
        </div >
    );
};

export default WelcomeSection;