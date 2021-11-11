import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/navigation/drawer';
import Footer from './components/Footer';
import AuthContextProvider from './store/contexts/AuthContextProvider';

export default function App() {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <Drawer />
                <Footer />
            </NavigationContainer>
        </AuthContextProvider>
    );
}