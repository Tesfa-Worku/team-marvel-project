import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView
} from 'react-native';

export default function Messages() {
    const [messageArr, setMessageArr] = useState([
        {message: 'heeey :)'}
    ]);
    const [messageInput, setMessageInput] = useState('');

    // test object
    const dummyData = {
        name: 'Xavier',
    }

const sendMessage = () => {
    setMessageArr([...messageArr, {message: messageInput}]);
    setMessageInput('');
}

const deleteMessage = (index) => {
    setMessageArr(
        messageArr.filter((text, selected) => selected != index)
        );
}

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
            <Text>{dummyData.name}</Text>
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
    <View style={styles.container}>
        {MessageWindow()}
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
});