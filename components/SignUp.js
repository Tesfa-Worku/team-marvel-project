import React, { useState, useEffect, createRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { WP_GET } from './WPAPI';
import { checkPasswordStrength } from './Password';
import { NavigationContext } from 'react-navigation';

export default function SignUp({ navigation }) {
    const [userData, setUserData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [canSignUp, setCanSignUp] = useState(false);

    const emailRef = createRef();
    const passwordRef = createRef();

const validateForm = (passwordInput) => {
    if (!firstName || typeof firstName !== 'string') alert('Please enter first name.');
    if (!lastName || typeof lastName !== 'string') alert('Please enter last name.');
    if (!email || typeof email !== 'string') alert('Please enter email.');
    if (!userName || typeof userName !== 'string') alert('Please enter username.');
    if ((!password || !confirmPassword) || typeof password !== 'string') alert('Please enter password');

    checkPasswordStrength(passwordInput);

    return (
        firstName.length > 0 &&
        lastName.length > 0 &&
        email.length > 0 &&
        userName > 0 &&
        password === confirmPassword
    );
}

const handleOnSubmit = () => {
    // WP_POST API function here

    //validateForm(password);

    // set loggedIn = true

    navigation.navigate('Newsfeed');
}

return (
    <View style={styles.container}>
        <ScrollView>
            <TextInput
                style={styles.input}
                onChangeText={text => setFirstName(text)}
                value={firstName}
                placeholder='First name'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setLastName(text)}
                value={lastName}
                placeholder='Last name'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder='Email'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setUserName(text)}
                value={userName}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='Password'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                placeholder='Confirm password'
            />
            <Button
                color='#F0131E'
                title='Sign Up'
                onPress={() => handleOnSubmit()}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>
                    Already have an account?
                </Text>
                <Text style={styles.loginHere}>
                    Login here
                </Text>
            </TouchableOpacity>
        </ScrollView>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    loginHere: {
        color: '#F0131E',
        alignSelf: 'center',
    },
});