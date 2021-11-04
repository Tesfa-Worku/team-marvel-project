import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/navigation/drawer';
import Footer from './components/Footer';

export default function App() {
  return (   
    <NavigationContainer>
        <Drawer />
        <Footer />    
    </NavigationContainer>      
  );
};
