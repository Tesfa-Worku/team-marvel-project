import React, { useState, useEffect, Comp } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Button,View, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ProfilePage from './ProfilePage';
//import ImageGallery from './ImageGallery';





export default function ProfileEdit () {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] =React.useState(null);
   
    return(
        <>
        <ProfilePage />
            <Button
             title="Edit your profile..."   
            />

        <View style={styles.editform}>
            <Text>
                Profile Edit Page
            </Text>
            <View>
                *** PROFILE IMAGES GO HERE***
                <Button
                    title="Edit profile photo..." 
                />

                

                <SafeAreaView>
                    <Text>Profile Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value="Edit Profile Name here..." />
                    <Text>Location</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value="Edit Location here..." 
                    />

                    <Button 
                        title="Submit"
                    />
            </SafeAreaView>
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

