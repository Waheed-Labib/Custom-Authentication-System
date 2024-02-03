import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isAlreadyUser, setIsAlreadyUser] = useState(false)
    const [user, setUser] = useState(null)

    const authInfo = {
        isAlreadyUser,
        setIsAlreadyUser,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;