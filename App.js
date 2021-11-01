import React from 'react';
//import { StyleSheet, View, } from 'react-native';
//import { posts, users } from './components/WPAPI'; 
//import Header from './components/Header';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/drawer';

export default function App() {
    return (
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    );
}

