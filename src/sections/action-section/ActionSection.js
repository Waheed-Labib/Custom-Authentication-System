import React, { useState } from 'react';
import Signup from './actions/Authentication/Signup';
import Login from './actions/Authentication/Login';
import LogOut from './actions/LogOut';
import Authentication from './actions/Authentication/Authentication';

const ActionSection = ({ isLoggedIn, setIsLoggedIn }) => {

    const [isAlreadyUser, setIsAlreadyUser] = useState(true)

    return (
        <div>
            {
                isLoggedIn ?
                    <LogOut></LogOut>
                    :
                    <Authentication></Authentication>
            }
        </div>
    );
};

export default ActionSection;