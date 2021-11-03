import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI'; 
import Messages from './components/Messages';

export default function App() {
  posts();
  users();
  return (
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
