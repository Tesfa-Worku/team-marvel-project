import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Pressable,
    Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const nav = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.signUp}>
                    <Button
                        color='#F0131E'
                        title='Sign Up'
                        onPress={() => Linking.openURL(`https://jualuc1.dreamhosters.com/register/`)}
                    />
                </View>
                <Pressable onPress={() => nav.navigate('Login')}>
                    <Text>
                        Already have an account?
                    </Text>
                    <Text style={styles.loginHere}>
                        Login here
                    </Text>
                </Pressable>
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
    signUp: {
        margin: 12,
    },
    loginHere: {
        color: '#F0131E',
        alignSelf: 'center',
    },
});