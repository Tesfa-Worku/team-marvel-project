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
    Platform,
    StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Friends from '../../Friends';
import ImageGallery from '../../ImageGallery';
import Messages from '../../Messages';
import ProfilePage from '../../ProfilePage';
import Newsfeed from '../../Newsfeed';
import Login from '../../Login';
import SignUp from '../../SignUp';
import ResetPassword from '../../ResetPassword';

const DrawerNavigation = createDrawerNavigator();
const isWeb = Platform.OS === 'web';

const webHeadder = (props) => {
    const { showInput, setShowInput } = props;
    const isActive = (nameOrIndex) => {
        return props.route.name === nameOrIndex;
    };

    const { loggedIn, setLoggedIn } = props;

    return (
        <SafeAreaView
            {...props}
            style={{
                marginTop: 0,
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 8,
                    }}
                >
                    <TouchableOpacity onPress = {() => props.navigation.navigate('Newsfeed')}>
                    <Text
                        style={[{ fontSize: 20, marginLeft: 10 }, styles.white]}
                    >
                        Marvel&nbsp;Space
                    </Text>
                    </TouchableOpacity>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        {/* <TextInput
                            placeholder="Search"
                            style={styles.webInput}
                        />
                        <TouchableOpacity
                            style={{ padding: 8, backgroundColor: '#fff' }}
                        >
                            <Text>Search</Text>
                        </TouchableOpacity> */}
                        <Image
                            source={require('../../Images/Logo.png')}
                            width={64}
                            height={32}
                            style={{ width: 64, height: 32 }}
                            resizeMode="contain"
                        />
                    </View>
                    <View>
                        {loggedIn ? (
                            <TouchableOpacity
                                onPress={() => setLoggedIn(!loggedIn)}
                            >
                                <Text style={styles.white}>Logout</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate('Login');
                                    }}
                                >
                                    <Text 
                                        style={[
                                            styles.white,
                                            isActive('Login') && styles.black,
                                        ]}
                                    >
                                        Login
                                    </Text>
                                </TouchableOpacity>
                                <Text style={{ marginHorizontal: 4 }}>|</Text>
                                <TouchableOpacity 
                                    onPress={() => {
                                        props.navigation.navigate('SignUp');
                                    }}
                                >
                                    <Text 
                                        style={[
                                            styles.white,
                                            isActive('SignUp') && styles.black,
                                        ]}
                                    >
                                        SignUp
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {showInput ? (
                            <></>
                        ) : (
                            <TouchableOpacity
                                onPress={() => setShowInput(true)}
                                style={{ flex: 0 }}
                            >
                                <AntDesign
                                    name="search1"
                                    size={24}
                                    color="black"
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginHorizontal: 12,
                        flexWrap: 'wrap',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Friends')}
                    >
                        <Text
                            style={[
                                styles.white,
                                isActive('Friends') && styles.black,
                            ]}
                        >
                            Friends
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 4 }}>|</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ImageGallery')}
                    >
                        <Text
                            style={[
                                styles.white,
                                isActive('ImageGallery') && styles.black,
                            ]}
                        >
                            Images
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 4 }}>|</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Messages')}
                    >
                        <Text
                            style={[
                                styles.white,
                                isActive('Messages') && styles.black,
                            ]}
                        >
                            Messages
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 4 }}>|</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ProfilePage')}
                    >
                        <Text
                            style={[
                                styles.white,
                                isActive('ProfilePage') && styles.black,
                            ]}
                        >
                            Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const drawerContent = (props) => {
    const isActive = (nameOrIndex) => {
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
                    flexDirection: 'column',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginHorizontal: 0,
                        flexWrap: 'nowrap',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Friends')}
                        style={[styles.btn, isActive(0) && styles.activeBtn]}
                    >
                        <Text>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ImageGallery')}
                        style={[styles.btn, isActive(1) && styles.activeBtn]}
                    >
                        <Text>Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Messages')}
                        style={[styles.btn, isActive(2) && styles.activeBtn]}
                    >
                        <Text>Messages</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ProfilePage')}
                        style={[styles.btn, isActive() && styles.activeBtn]}
                    >
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
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
                                MARVELSPACE
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
                        {Platform.OS === 'web' ? (
                            <></>
                        ) : (
                            <Image
                                source={require('../../Images/Logo.png')}
                                width={64}
                                height={32}
                                style={{ width: 64, height: 32 }}
                            />
                        )}
                    </View>
                    {isWeb && webHeadder(props)}
                    {Platform.OS !== 'web' && (
                        <TouchableOpacity onPress={() => setShowInput(true)}>
                            <AntDesign name="search1" size={24} color="black" />
                        </TouchableOpacity>
                    )}
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
            <DrawerNavigation.Screen name="Newsfeed" component={Newsfeed} />
            <DrawerNavigation.Screen name="Friends" component={Friends} />
            <DrawerNavigation.Screen name="ImageGallery" component={ImageGallery} />
            <DrawerNavigation.Screen name="Messages" component={Messages} />
            <DrawerNavigation.Screen name="ProfilePage" component={ProfilePage} />
            <DrawerNavigation.Screen name="Login" component={Login} /> 
            <DrawerNavigation.Screen name="SignUp" component={SignUp} />
            <DrawerNavigation.Screen name="ResetPassword" component={ResetPassword} />
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
        backgroundColor: '#f00',
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
    webInput: {
        backgroundColor: '#fff',
        padding: 8,
        marginRight: 8,
    },
    white: {
        color: '#fff',
    },
    black: {
        color: '#000',
    },
});

export default Drawer;


