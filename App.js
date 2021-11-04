import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/navigation/drawer';

export default function App() {
  return ( 
    <NavigationContainer>
        <Drawer />    
    </NavigationContainer>   
  );
};