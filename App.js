import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';

export default function App() {
  return (    
    <View>      
      <ImageGallery/>
      <SearchPage/>      
      <Messages/>
      <ResetPassword/>
      <Footer/>      
    </View>
  );
};


