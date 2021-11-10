import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Rules() {

return (
    <ScrollView>
        <View style={styles.container}>
            <Text>Rules</Text>
        </View>
    </ScrollView>
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