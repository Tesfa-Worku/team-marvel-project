import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/navigation/drawer';

export default function App() {
  return (    
    <NavigationContainer>
        <Drawer />    
    </NavigationContainer>      
  );
};



