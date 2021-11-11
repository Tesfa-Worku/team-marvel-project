import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./components/navigation/drawer";
import Footer from "./components/Footer";
import AuthContextProvider from "./store/contexts/AuthContextProvider";

export default function App() {
  const [storedToken, setStoredToken] = useState("");
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Drawer setStoredToken={setStoredToken} />
        <Footer />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
