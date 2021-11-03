import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function SearchPage() {
    const [text, setText] = useState();
    return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        setText={setText}
        value={text}
        placeholder="Search here"        
        />
        <View>
            <Button
                title="Search"
                color="blue"          
                // onPress={}
            />
        </View>
        
    </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,         
        // backgroundColor: 'gray',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
