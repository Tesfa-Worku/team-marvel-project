import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = useCallback(formData => {
        console.log(formData);
    }, []);
    const onChangeField = useCallback(
    name => text => {
        setValue(name, text);
    },
    []
    );

    useEffect(() => {
    register('email');
    register('password');
    }, [register]);

    return (
    <View>
        <Text>Reset Password</Text>
        <View>
            <Text>Email</Text>
            <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            onChangeText={onChangeField('email')}
        />
        </View>

        <View>
            <Text>Password</Text>
            <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Password"    
            onChangeText={onChangeField('password')}
            />
        </View>

        <View>
            <Text>Confirm Password</Text>
            <TextInput
            secureTextEntry
            autoCompleteType="password"
            placeholder="Confirm Password"
            onChangeText={onChangeField('password')}
            />
        </View>
    
        <Button 
            title="Reset" 
            onPress={handleSubmit(onSubmit)} 
        />
    </View>
    );
};

export default ResetPassword;