import React, { useContext } from 'react';
import Login from './Login';
import Signup from './Signup';
import { AuthContext } from 'context/AuthProvider';

const Authentication = () => {

    const { isAlreadyUser } = useContext(AuthContext)

    return (
        <div>
            {
                isAlreadyUser ?
                    <Login></Login>
                    :
                    <Signup></Signup>
            }
        </div>
    );
};

export default Authentication;