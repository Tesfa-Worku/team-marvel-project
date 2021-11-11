import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable
} from 'react-native';
import { WP_GET } from './WPAPI';

export default function Friends({ navigation }) {
    const [friendsArr, setFriendsArr] = useState([]);
    useEffect(
        () => {
            WP_GET('members')
            .then(
                (data) => setFriendsArr(data)
            )
        },
        []
    )

const generateFriends = friendsArr.map((user, index) => {
    return(
        <View key={index} >
            <Pressable onPress={() => navigation.navigate('ProfilePage', {userId: user.id})}>
                <View style={styles.imageRow} >
                    <Image
                        style={{width: 150, height: 150}}
                        source={{uri: user.avatar_urls?.full.startsWith('https:') ? user.avatar_urls?.full : 'https://www.gravatar.com/avatar/?d=identicon'}}
                    />
                    <Text>{user.name}</Text>
                </View>
            </Pressable>
        </View>
        )
    }
)

return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
            <Text>Friends</Text>
        </View>
        <View style={styles.imageContainer}>
            {generateFriends}
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
    },
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
        justifyContent: 'center',
        margin: 10,
    },
    imageRow: {
        height: 'auto',
        flexGrow: 1,
        alignItems: 'center',
    },
});