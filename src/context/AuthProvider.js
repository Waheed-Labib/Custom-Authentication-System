import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAlreadyUser, setIsAlreadyUser] = useState(false)

    const authInfo = {
        isLoggedIn,
        setIsLoggedIn,
        isAlreadyUser,
        setIsAlreadyUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;