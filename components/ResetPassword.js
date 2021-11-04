import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Text, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
        <View>
            <Text>Reset Password</Text>
        </View>

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
    
        <View>
            <Button 
                color='#F0131E'
                title="Reset" 
                onPress={handleSubmit(onSubmit)} 
            />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ResetPassword;