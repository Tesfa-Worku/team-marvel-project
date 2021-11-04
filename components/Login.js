import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

const Login = ({ setLoggedIn }) => {
    const [form, setForm] = useState({ email: '', password: '' });

    const nav = useNavigation();

    const onChange = (name, value) => setForm({ ...form, [name]: value });

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={form.email}
                    onChangeText={(text) => onChange('email', text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={form.password}
                    secureTextEntry
                    onChangeText={(text) => onChange('password', text)}
                />
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => {
                        if (!form.email || !form.password) {
                            return Alert.alert(
                                'Alert',
                                'Please enter email and password'
                            );
                        }
                        setLoggedIn(true);
                        nav.navigate('Newsfeed');
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.row}>
               <Text onPress = {()=> nav.navigate('ResetPassword')}> Reset Password </Text>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    inputContainer: {
        marginVertical: 12,
    },
    label: { marginBottom: 6 },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#000',
    },
    btn: {
        backgroundColor: '#f00',
        flex: 1,
        padding: 12,
    },
    row: {
        flexDirection: 'row',
    },
    btnText: { color: '#fff', fontSize: 16 },
});

export default Login;
