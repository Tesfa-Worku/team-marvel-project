import React, { useState } from "react";

import { AuthContext } from "./authContext";

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [posts, setPosts] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        showInput,
        setShowInput,
        searchQuery,
        setSearchQuery,
        searching,
        setSearching,
        posts,
        setPosts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
