import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    const pageArray = ['About', 'Rules', 'Contact', 'Terms']

    const pageList = pageArray.map((pageArray) => (
        <View>          
            <Text>{pageArray}</Text>
        </View>
    )
    );

    return (
    <View style={styles.container}>
        <View style={styles.developerSection}>
            <Text>brought to you by team-marvel</Text>
        </View> 
        <View style={styles.linksWrapper}>
            <Pressable onPress={pageList[0]}>
                <Text>About</Text>
            </Pressable>            
            <Pressable onPress={pageList[1]}>
                <Text>Rules</Text>
            </Pressable>
            <Pressable onPress={pageList[2]}>
                <Text>Contact</Text>
            </Pressable>
            <Pressable onPress={pageList[3]}>
                <Text>Terms</Text>
            </Pressable>        
        </View>
        <View style={styles.rightsReserved}>
            <Text>©2021 MarvelSpace. All Rights Reserved.</Text>
        </View>           
    </View>    
    );
}

const styles = StyleSheet.create({
    container: {   
        backgroundColor: 'gray',
    },
    developerSection:{
        flexDirection: 'row',
        justifyContent: 'center',        
    },
    linksWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    rightsReserved: {
        flexDirection: 'row',
        justifyContent: 'space-around',        
    }
});
