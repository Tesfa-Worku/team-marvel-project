import { createContext } from 'react';

const defaultValue = {
    loggedIn: false,
    setLoggedIn: () => {},
    showInput: false,
    setShowInput: () => {},
};

export const AuthContext = createContext(defaultValue);
