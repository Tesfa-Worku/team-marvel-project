import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
} from 'react-native';
import { WP_GET } from './WPAPI';

export default function Friends() {
    const [friendsArr, setFriendsArr] = useState([]);
    useEffect(
        () => {
            WP_GET('users')
            .then(
                (data) => setFriendsArr(data)
            )
        },
        []
    )

const generateFriends = friendsArr.map((user, index) => {
    return(
        <View key={index} >
            {console.log(user)}
            <Pressable onPress={() => console.log(user.id)}>
                <View style={styles.imageRow} >
                    <Image
                        style={{width: 96, height: 96}}
                        //helper function to check if avatar_urls exists and add https to avatar_urls
                        source={{uri: user.avatar_urls?.['96']}}
                    />
                    <Text>{user.name}</Text>
                </View>
            </Pressable>
        </View>
        )
    }
)

return (
    <View>
        <View style={styles.container}>
            <Text>Friends</Text>
        </View>
        <View style={styles.imageContainer}>   
            {generateFriends}
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
    image: {
        minHeight: '100%',
        minWidth: '100%',
    },
    imageContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageRow: {
        height: 'auto',
        flexGrow: 1,
    },
});