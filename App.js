import { StatusBar } from 'expo-status-bar';
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
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';

export default function App() {
  posts();
  users();

  return (    
    <View>
      <ProfilePage/>
      <ProfileEdit/>
      <ImageGallery/>
      <SearchPage/>
      <Footer/>
      <Messages/>     
    </View>


  export default function App() {
  return ( 
    <NavigationContainer>
        <Drawer />    
    </NavigationContainer>   
  );
}
};
