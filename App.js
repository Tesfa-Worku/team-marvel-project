import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { posts, users } from './components/WPAPI';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer'; 

export default function App() {
  posts();
  users();

  return (    
    <View>
      <SearchPage/>
      <Footer/>      
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },  
// });
