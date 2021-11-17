import { createContext } from "react";

const defaultValue = {
  loggedIn: false,
  setLoggedIn: () => {},
  showInput: false,
  setShowInput: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searching: false,
  setSearching: () => {},
  posts: [],
  setPosts: () => {},
};

export const AuthContext = createContext(defaultValue);
