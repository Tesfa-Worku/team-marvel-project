import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import { WP_GET } from './WPAPI';

export default function Messages() {
    const [messageArr, setMessageArr] = useState([
        {message: 'heeey :)'}
    ]);
    const [messageInput, setMessageInput] = useState('');
    const [userData, setUserData] = useState([]);
    useEffect(
        () => {
            WP_GET('users')
            .then(
                (data) => setUserData(data)
            )
        },
        []
    )

const sendMessage = () => {
    setMessageArr([...messageArr, {message: messageInput}]);
    setMessageInput('');
}

const deleteMessage = (index) => {
    setMessageArr(
        messageArr.filter((text, selected) => selected != index)
        );
}

const userList = userData.map((user, id) => (
    // click on name to get messages with specific id
    // attach onPress function to Text
    <View key={id}>
        <Text>{user.name}</Text>
    </View>
    )
)

const generateConversation = messageArr.map((text, index) => (
    <View key={index}>
        <Text>{text.message}</Text>
        <Button
            key={index}
            onPress={() => deleteMessage(index)}
            title='Delete'
        />
    </View>
    )
)

const MessageWindow = () => {
    return (
        <View>
            <Text>{userData.name}</Text>
            <ScrollView>
                {generateConversation}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={messageInput => setMessageInput(messageInput)}
                    onSubmitEditing={sendMessage}
                    value={messageInput}
                    placeholder='Write a message...'
                />
            </View>
            <Button 
                onPress={sendMessage}
                title='Send'
            />
        </View>
    ) 
}

return (
    <View>
        <View style={styles.sidebar}>
            {userList}
        </View>
        <View style={styles.container}>
            {MessageWindow()}
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
    sidebar: {
        float: 'left',
    },
});