import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI';
import Messages from './components/Messages';
import ImageGallery from './components/ImageGallery';

export default function App() {
  // posts();
  // users();
  return (
    <ImageGallery />
    // <Messages />
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
