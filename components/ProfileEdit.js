import React, { useState, useEffect, Comp } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Button,View, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ProfilePage from './ProfilePage';





export default function ProfileEdit () {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] =React.useState(null);
   
    return(
        <>
        <ProfilePage />
            <Button
             title="Edit your profile..."   
            />
            <View style={styles.container}>
            <Text>
                Profile Edit Page
            </Text>

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
                    value="Edit Location here..." />

            </SafeAreaView>
            </View>
        </>

        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hotpink',
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

