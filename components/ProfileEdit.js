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
            <View style={styles.container}>
            <Text>
                <h3>Profile Edit Page</h3>
            </Text>
            <View>
                <View>

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
                <Button title="Submit..." 
                        color='#F0131E'
                />
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

