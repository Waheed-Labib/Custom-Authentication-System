import React, { useContext } from 'react';
import LogOut from './actions/LogOut';
import Authentication from './actions/Authentication/Authentication';
import { AuthContext } from 'context/AuthProvider';

const ActionSection = () => {

    const { user, setUser } = useContext(AuthContext);

    return (
        <div>
            {
                user ?
                    <LogOut setUser={setUser}></LogOut>
                    :
                    <Authentication></Authentication>
            }
        </div>
    );
};

export default ActionSection;