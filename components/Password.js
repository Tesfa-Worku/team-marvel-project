import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

// display alert modal on Login and SignUp:
// import { checkPasswordStrength } from './Password/'
// {alertWeak ? displayWeakPassword() : null}
export const checkPasswordStrength = (passwordInput) => {
    const [strongPassword, setStrongPassword] = useState(false);
    const [alertWeak, setAlertWeak] = useState(false);

    const displayWeakPassword = () => (
        <View style={styles.alertContainer}>
            <Text>
                Password must be 8 to 15 characters containing at least a digit, uppercase, lowercase, and symbol!
            </Text>
            <View>
                <Button
                    color='#F0131E'
                    title='OK'
                    onPress={() => setAlertWeak(!alertWeak)}
                    />
            </View>
        </View>
    );

    // src: https://www.w3resource.com/javascript/form/password-validation.php
    const check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (passwordInput.value.match(check)) {
        setStrongPassword(true);
    }
    else {
        setAlertWeak(!alertWeak);
        setStrongPassword(false);
    }
}

const styles = StyleSheet.create({
    alertContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});