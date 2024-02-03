import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Authentication = ({ isAlreadyMember }) => {
    return (
        <div>
            {
                isAlreadyMember ?
                    <Login></Login>
                    :
                    <Signup></Signup>
            }
        </div>
    );
};

export default Authentication;