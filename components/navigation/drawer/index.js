import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    Platform,
    StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Friends from '../../Friends';
import ImageGallery from '../../ImageGallery';
import Messages from '../../Messages';
import Profile from '../../Profile';
import Newsfeed from '../../Newsfeed';

const DrawerNavigation = createDrawerNavigator();
const isWeb = Platform.OS === 'web';

const drawerContent = (props) => {
    const isActive = (nameOrIndex) => {
        if (isWeb) {
            return props.route.name === nameOrIndex;
        }

        return props.state && props.state.index === nameOrIndex;
    };

    const { loggedIn, setLoggedIn } = props;

    return (
        <SafeAreaView
            {...props}
            style={{ marginTop: isWeb ? 0 : StatusBar.currentHeight, flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: isWeb ? 'row' : 'column',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: isWeb ? 'row' : 'column',
                        justifyContent: isWeb ? 'flex-end' : undefined,
                        marginHorizontal: isWeb ? 12 : 0,
                        flexWrap: isWeb ? 'wrap' : 'nowrap',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Friends')}
                        style={[
                            styles.btn,
                            isActive(isWeb ? 'Friends' : 0) && styles.activeBtn,
                        ]}
                    >
                        <Text>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ImageGallery')}
                        style={[
                            styles.btn,
                            isActive(isWeb ? 'ImageGallery' : 1) && styles.activeBtn,
                        ]}
                    >
                        <Text>Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Messages')}
                        style={[
                            styles.btn,
                            isActive(isWeb ? 'Messages' : 2) &&
                                styles.activeBtn,
                        ]}
                    >
                        <Text>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Newsfeed')}
                        style={[
                            styles.btn,
                            isActive(isWeb ? 'Newsfeed' : 3) &&
                                styles.activeBtn,
                        ]}
                    >
                        <Text>Newsfeed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Profile')}
                        style={[
                            styles.btn,
                            isActive(isWeb ? 'Profile' : 4) && styles.activeBtn,
                        ]}
                    >
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
                {isWeb ? (
                    <>
                        {loggedIn ? (
                            <TouchableOpacity
                                onPress={() => setLoggedIn(!loggedIn)}
                            >
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => setLoggedIn(!loggedIn)}
                                >
                                    <Text>Login</Text>
                                </TouchableOpacity>
                                <Text style={{ marginHorizontal: 4 }}>|</Text>
                                <TouchableOpacity>
                                    <Text>SignUp</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </>
                ) : (
                    <TouchableOpacity
                        style={[styles.btn, styles.btnDanger]}
                        onPress={() => {
                            setLoggedIn && setLoggedIn(!loggedIn);
                        }}
                    >
                        <Text style={styles.textDanger}>
                            {loggedIn ? 'Logout' : 'Login'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

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
                    <View>
                        {!isWeb && (
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Marvel Space
                            </Text>
                        )}
                        {Platform.OS !== 'web' && (
                            <TouchableOpacity
                                onPress={props.navigation.toggleDrawer}
                            >
                                <AntDesign
                                    name="menuunfold"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {isWeb && (
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Title
                            </Text>
                        )}
                        <Image
                            source={require('../../Images/Logo.png')}
                            width={64}
                            height={32}
                            style={{ width: 64, height: 32 }}
                        />
                    </View>
                    {isWeb && drawerContent(props)}
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
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <DrawerNavigation.Navigator
            drawerContent={Platform.OS === 'web' ? undefined : drawerContent}
            screenOptions={{
                header: (props) =>
                    header({
                        ...props,
                        showInput,
                        setShowInput,
                        loggedIn,
                        setLoggedIn,
                    }),
            }}
        >
            <DrawerNavigation.Screen name="Friends" component={Friends} />
            <DrawerNavigation.Screen name="ImageGallery" component={ImageGallery} />
            <DrawerNavigation.Screen name="Messages" component={Messages} />
            <DrawerNavigation.Screen name="Newsfeed" component={Newsfeed} />
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
        marginTop: isWeb ? 0 : StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#00f',
        alignItems: 'center',
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