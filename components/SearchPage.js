import React from 'react';
import { Pressable, StyleSheet, TextInput, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { WP_GET } from './WPAPI';

export default function SearchPage() {    
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    useEffect(
        () => {
            WP_GET('users')
            .then(
                (data) => {
                    setUserData(data);
                }
            )
        },
        [selectedUser]
    );

    const userList = userData.map((user, index) => (
        <View key={index}>
            <Pressable onPress={() => setSelectedUser(user)}>
                <Text>{user.name}</Text>
            </Pressable>
        </View>
        )
    )
    
    const searchResult = () => {
        return selectedUser && (
            <View>
                <Image
                    style={styles.image}
                    source={{uri: selectedUser.avatar_urls?.['24']}}
                />
                <Text>{selectedUser.name}</Text>
                <Text>{selectedUser.profile}</Text>                
            </View>
        ) 
    }

    return (
        <View>
            <View>
                {userList}
            </View>            
            <View style={styles.container}>
                {searchResult()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,         
        backgroundColor: 'gray',
    },
    image: {
        height: 100,
        width: 100,
    },
});
