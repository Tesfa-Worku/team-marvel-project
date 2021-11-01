import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet,Text, View, Image } from 'react-native';
import { users, media } from './WPAPI';


export default function ProfilePage () {
  const [userList, setUserList] = useState([]);
  useEffect(
      () => {
          users()
          .then(
              (data) => setUserList(data)
          )
      },
      []
  )
  console.log(userList)

  const buildProfile = userList.map((user, index) => {
    const imgWidth = 150;
    const imgHeight = 150;
    //const imgHeight = (user.media_details.height / user.media_details.width) * imgWidth;
    console.log(Object.values(user.avatar_urls)[2])
    return(
        <View
            key={index} >
            <Image
                style={{width: imgWidth, height: imgHeight}}
                source={Object.values(user.avatar_urls)[2]}
            />
        </View>
        )
    }
)
  

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.username}>
          User Name
        </Text>
      </View>

      <View style={styles.online}>
        {buildProfile}
        <Text> Last Active: 
          x minutes ago</Text>
      </View>

      <View style={styles.status}>
        <View style={styles.mood}>
          <Text>Mood:</Text>
        </View>
        
        <View style={styles.aboutme}>
        <Text>About Me:</Text>
        </View>
      </View>
    </View>
  )
  }
  <View>

  </View>





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
          justifyContent: 'space-around',
          padding: 15,
        },

        mood: {
          justifyContent: 'space-around',
          marginRight: 50,
        },

        username: {
          fontSize: 30,
          fontWeight: 'bold',
        },

        online: {
          display: 'flex',
          flexDirection: 'row',
        }
    });