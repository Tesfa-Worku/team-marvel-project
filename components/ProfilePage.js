import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,Text, View } from 'react-native';

export default function ProfilePage () {
  return(
    <View style={styles.container}>
      <View>
        <Text>
          Shpongle
        </Text>
      </View>
    </View>
  )
  }





    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });