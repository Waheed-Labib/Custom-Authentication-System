import React from 'react';

const WelcomeSection = ({ isLoggedIn }) => {

    const welcomeGuest = 'Welcome to my Custom Authentication & Authorization System. Here you can signup, login & logout. Your password is secured by bcryptjs. And your data is protected by json web token.';

    const welcomeUser = ''

    return (
        <div>
            {
                isLoggedIn ?
                    <p>{welcomeUser}</p>
                    :
                    <p>{welcomeGuest}</p>
            }
        </div>
    );
};

export default WelcomeSection;