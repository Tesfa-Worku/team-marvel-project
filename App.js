import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI';
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';
import SearchPage from './components/SearchPage';
import Newsfeed from './components/Newsfeed';
import Footer from './components/Footer';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  posts();
  users();
  return (
    <>
      
      
      <ProfileEdit />
      <Newsfeed />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
