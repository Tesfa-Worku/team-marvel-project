import React, { useState, useEffect, Comp } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Button,View, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ProfilePage from './ProfilePage';
import Footer from './Footer';





export default function ProfileEdit () {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] =React.useState(null);
   
    return(
        <>
        
        <ProfilePage />
            <Button title="Edit your profile..." />
            <View style={styles.container}>
            <Text>
                Profile Edit Page
            </Text>

            PROFILE EDIT AREA GOES HERE:
            -Image Gallery
            <View>
                <Button title="Edit profile photo" />
                <SafeAreaView>
                    <Text>Profile Name</Text>
                    <TextInput label="Profile Name"
                        style={styles.input}
                        onChangeText={onChangeText}
                        value="Edit Profile Name here..." 
                    />
                    <Text>Location</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value="Edit Location here..." 
                    />
                </SafeAreaView>
                <Button title="Submit..." />
            </View>            

            </View>
        </>

        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
    },
    button: {
      width: 50,  
    },

})

