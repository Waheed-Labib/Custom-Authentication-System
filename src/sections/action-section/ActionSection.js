import React, { useState } from 'react';
import LogOut from './actions/LogOut';
import Authentication from './actions/Authentication/Authentication';

const ActionSection = ({ isLoggedIn, setIsLoggedIn }) => {

    const [isAlreadyUser, setIsAlreadyUser] = useState(false)

    return (
        <div>
            {
                isLoggedIn ?
                    <LogOut></LogOut>
                    :
                    <Authentication isAlreadyUser={isAlreadyUser} setIsAlreadyUser={setIsAlreadyUser}></Authentication>
            }
        </div>
    );
};

export default ActionSection;