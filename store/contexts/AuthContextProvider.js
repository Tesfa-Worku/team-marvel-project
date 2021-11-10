import React, { useState } from 'react';

import { AuthContext } from './authContext';

const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showInput, setShowInput] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                loggedIn,
                setLoggedIn,
                showInput,
                setShowInput,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
