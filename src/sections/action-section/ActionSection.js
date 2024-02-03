import React, { useContext, useState } from 'react';
import LogOut from './actions/LogOut';
import Authentication from './actions/Authentication/Authentication';
import { AuthContext } from '../../context/AuthProvider';

const ActionSection = () => {

    const { isLoggedIn } = useContext(AuthContext);

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