import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,Text, View } from 'react-native';
import { users } from './WPAPI';

export default function ProfilePage () {
  return(
    <View style={styles.container}>
      <View>
        <Text>
          <h1>User Name</h1>
        </Text>
      </View>

      <View>
        /* Profile Photo (use Xavier's code for this) */
      </View>

      <View style={styles.status}>
        <Text><p>Mood:</p></Text>
        <Text><p>About Me:</p></Text>
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

        status: {
          display: 'flex',
          flexDirection: 'row',
        
        }
    });