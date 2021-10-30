import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { posts, users } from './components/WPAPI'; 
import Header from './components/Header';

export default function App() {
  posts();
  users();

  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
        
}

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-around',
     padding: 20,
     marginTop: "100",
  },
   developerSection:{
     flexDirection: "row",
     justifyContent: 'center', 
     padding: 10,
  },
    logout: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     padding: 10,
  },
});
  
