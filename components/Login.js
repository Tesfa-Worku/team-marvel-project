import React from 'react';
import { View, Text } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View>
            <Text>Login</Text>
            <Text onPress={() => navigation.navigate('ResetPassword')}>ResetPassword</Text>
        </View>
    );
};

export default Login;
