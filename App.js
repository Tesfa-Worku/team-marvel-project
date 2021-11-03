import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI'; 
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';
import Messages from './components/Messages';
import Footer from './components/Footer';
import Header from '.components/Header';

export default function App() {
  posts();
  users();
  return (
    <>
      <Header / >
      <ProfilePage />
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
