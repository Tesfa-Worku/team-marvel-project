import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI'; 
import ProfilePage from './components/ProfilePage';

export default function App() {
  //posts();
  //users();
  return (
    <View>
        <ProfilePage />
      <StatusBar style="auto" />
    </View>
  );
}
