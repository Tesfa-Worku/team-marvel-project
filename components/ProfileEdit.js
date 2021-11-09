import React, { useState, useEffect, Comp } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Button,View, Image, SafeAreaView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ProfilePage from './ProfilePage';
import Footer from './Footer';

export default function ProfileEdit () {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] =React.useState(null);
   
    return(
        <>
        
        <ProfilePage />
            <Button 
                title="Edit your profile..."
                color='#F0131E'     
            />
            <View style={styles.container}>
            <Text>
                Profile Edit Page
            </Text>
            <View>
                {/* *** PROFILE IMAGES GO HERE*** */}
                <Button
                    title="Edit profile photo..." 
                    color='#F0131'
                />

                

            {/* PROFILE EDIT AREA GOES HERE:
            -Image Gallery */}
            <View>
                <Button 
                    title="Edit profile photo"
                    color='#F0131E'
                 />
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

        </View>
        </>

        
    )

}

const styles = StyleSheet.create({
    editform: {
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

