import React from 'react';
import { View, Text, Platform } from 'react-native';
import ProfilePage from './ProfilePage';

const Newsfeed = () => {
    return (
        <View>
            <Text>Newsfeed</Text>
            <ProfilePage />
        </View>
    );
};

export default Newsfeed;
