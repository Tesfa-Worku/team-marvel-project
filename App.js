import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';
import SignUp from './components/SignUp';

export default function App() {
  return (
    // <SignUp />
    // <ImageGallery />
    <Messages />
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
