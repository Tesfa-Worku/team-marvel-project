import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet,Text, View, Image, Button } from 'react-native';
import { WP_GET } from './WPAPI';


export default function ProfilePage () {
  const [userList, setUserList] = useState([]);
  useEffect(
      () => {
          WP_GET("users")
          .then(
              (data) => setUserList(data)
          )
      },
      []
  )
  //console.log(userList)

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
    <View style={styles.profilepage}>
      <View style={styles.profilepageleft}>
        <View>
          <Text style={styles.username}>
            User Name
          </Text>
        </View>

        <View style={styles.profilesection}>
          {buildProfile}
          <View style={styles.lastactive}>
            <Text> 
              Last Active: x minutes ago
            </Text>

            <View style={styles.onlineindicator}>
              <Text>
                ONLINE NOW:   
              </Text>
               
            </View>
          </View>
          
        </View>

        <View style={styles.usersettings}>
          <View style={styles.mood}>
            <Text>Mood:</Text>
          </View>
        
          <View style={styles.aboutme}>
            <Text>
              About Me:
            </Text>
          </View>
        </View>
        <View> 
            <Button 
              title="Edit Profile"
              color='#F0131E'
              
            />
          
        </View>

        <View style={styles.contactwrapper}>
          <View style={styles.contactheader}>
              <Text>
                <h3>CONTACT</h3>
              </Text>
          </View>
          <View style={styles.contactinformation}>
            <View style={styles.contactleft}>
              <Text>
                  <h4>Add Friend</h4>
                  <h4>Send Message</h4>
                  <h4>Add to Group</h4>
                </Text>
            </View>
            <View style={styles.contactright}>
              <Text>
                <h4>Share</h4>
                <h4>Block User</h4>
                <h4>Report User</h4>
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.interestswrapper}>
          <View style={styles.interestsheader}>
            <Text>
              <h3>INTERESTS</h3>
            </Text>
          </View>
          <View style={styles.interestsinformation}>
            <Text>
              <h4>General</h4>
              <h4>Music</h4>
              <h4>Movies</h4>
              <h4>Television</h4>
              <h4>Books</h4>
              <h4>Powers</h4>
            </Text>
          </View>
        </View>

      </View>
      <View style={styles.profilepageright}>
        
        
        <View style={styles.userposts}>
          *** USER'S POSTS ***
        </View>

        <View style={styles.userfriendspost}>
          *** USER FRIENDS POST ***
        </View>

        <View style={styles.friendscomments}>
          *** USER'S FRIENDS COMMENTS ***
        </View>
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

        h3: {
          color: '#F0131E',
        },


        profilepage: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          
        },

        profilepageleft: {

        },

        profilesection: {
          display: 'flex',
          flexDirection: 'row',
        },

        onlineindicator: {

        },

        profilepageright: {
          padding: 20,
          justifyContent: 'space-between',
        },

        contactwrapper: {
          justifyContent: 'space-around',
          margin: 10,
          borderWidth: 4,
          borderColor: '#F0131E',

        },

        contactheader: {
          backgroundColor: '#F0131E',
          justifyContent: 'space-around'
          
        },

        contactinformation: {
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',    
        },

        interestswrapper: {
          justifyContent: 'space-around',
          margin: 10,
          borderWidth: 4,
          borderColor: '#F0131E',

        },

        interestsheader: {
          backgroundColor: '#F0131E',

        },


        interestsinformation: {
          margin: 5,
        },


        userposts: {
          backgroundColor: 'lightgrey',

        },

        userfriendspost: {
          backgroundColor: 'lightgrey',
        },

        friendscomments: {
          backgroundColor: 'lightgrey',

        },

        usersettings: {
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

        
    });