import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';

export default function App() {
  posts();
  users();

  return (    
    <View>
      <ImageGallery/>
      <SearchPage/>
      <Footer/>
      <Messages/>      
    </View>
  );
};


