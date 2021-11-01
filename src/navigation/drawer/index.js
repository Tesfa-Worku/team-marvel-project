import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Friends from '../../screens/Friends';
//import Images from '../../screens/Images';
import Messages from '../../screens/Messages';
import Profile from '../../screens/Profile';

const DrawerNavigation = createDrawerNavigator();

const drawerContent = (props) => (
    <SafeAreaView {...props} style={{ marginTop: 20, flex: 1 }}>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Friends')}
                    style={[
                        styles.btn,
                        props.state.index === 0 && styles.activeBtn,
                    ]}
                >
                    <Text>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Images')}
                    style={[
                        styles.btn,
                        props.state.index === 1 && styles.activeBtn,
                    ]}
                >
                    {/* <Text>Images</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Messages')}
                    style={[
                        styles.btn,
                        props.state.index === 2 && styles.activeBtn,
                    ]} */}
                >
                    <Text>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Profile')}
                    style={[
                        styles.btn,
                        props.state.index === 3 && styles.activeBtn,
                    ]}
                >
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.btn, styles.btnDanger]}>
                <Text style={styles.textDanger}>Logout</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

const header = (props) => {
    const { showInput, setShowInput } = props;
    return (
        <View {...props} style={styles.header}>
            {showInput ? (
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Search" />
                    <AntDesign
                        name="closecircleo"
                        size={24}
                        color="black"
                        style={styles.inputCloseIcon}
                        onPress={() => setShowInput(false)}
                    />
                </View>
            ) : (
                <>
                    <TouchableOpacity onPress={props.navigation.toggleDrawer}>
                        <AntDesign name="menuunfold" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        {/* <Image
                            source={require('../../images/fist-1.jpg')}
                            width={64}
                            height={32}
                            style={{ width: 64, height: 32 }} */}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Title
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => setShowInput(true)}>
                        <AntDesign name="search1" size={24} color="black" />
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

function Drawer() {
    const [showInput, setShowInput] = useState(false);
    return (
        <DrawerNavigation.Navigator
            drawerContent={drawerContent}
            screenOptions={{
                header: (props) =>
                    header({ ...props, showInput, setShowInput }),
            }}
        >
            <DrawerNavigation.Screen name="Friends" component={Friends} />
            {/* <DrawerNavigation.Screen name="Images" component={Images} /> */}
            <DrawerNavigation.Screen name="Messages" component={Messages} />
            <DrawerNavigation.Screen name="Profile" component={Profile} />
        </DrawerNavigation.Navigator>
    );
}

const styles = StyleSheet.create({
    btn: { padding: 20 },
    activeBtn: {
        backgroundColor: '#f0f0f0',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#00f',
    },
    btnDanger: {
        backgroundColor: '#aa0000',
    },
    textDanger: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 8,
        backgroundColor: '#fff',
        flex: 1,
    },
    inputCloseIcon: { marginLeft: 8 },
});

export default Drawer;
