import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Authentication = ({ isAlreadyUser, setIsAlreadyUser }) => {
    return (
        <div>
            {
                isAlreadyUser ?
                    <Login setIsAlreadyUser={setIsAlreadyUser}></Login>
                    :
                    <Signup setIsAlreadyUser={setIsAlreadyUser}></Signup>
            }
        </div>
    );
};

export default Authentication;