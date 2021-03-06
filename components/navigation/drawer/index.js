import React, { useEffect, useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Friends from "../../Friends";
import ImageGallery from "../../ImageGallery";
import ProfilePage from "../../ProfilePage";
import ProfileEdit from "../../ProfileEdit";
import Newsfeed from "../../Newsfeed";
import Login from "../../Login";
import SignUp from "../../SignUp";
// import ResetPassword from "../../ResetPassword";
import Rules from "../../Rules";
import Contact from "../../Contact";
import Terms from "../../Terms";
import About from "../../About";
import { AuthContext } from "../../../store/contexts/authContext";
import { WP_GET } from "../../WPAPI";
import Users from "../../Users";

const DrawerNavigation = createDrawerNavigator();
const isWeb = Platform.OS === "web";

const webHeader = (props) => {
  const { showInput, setShowInput, setSearchQuery } = props;
  const isActive = (nameOrIndex) => {
    return props.route.name === nameOrIndex;
  };

  const { loggedIn, setLoggedIn } = props;

  const onLogout = async () => {
    AsyncStorage.removeItem("user");
    props.navigation.navigate("Login");
    setLoggedIn(false);
  };

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
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Newsfeed")}
            >
              <Image
                source={require("../../Images/Logo.png")}
                width={64}
                height={32}
                style={{ width: 64, height: 32 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View>
            {loggedIn ? (
              <TouchableOpacity
                style={[styles.white, { marginBottom: 10, marginRight: 10 }]}
                onPress={onLogout}
              >
                <Text style={styles.white}>Logout</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Login");
                  }}
                >
                  <Text
                    style={[styles.white, isActive("Login") && styles.black]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 4 }}>|</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("SignUp");
                  }}
                >
                  <Text
                    style={[styles.white, isActive("SignUp") && styles.black]}
                  >
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {loggedIn && !showInput && (
              <TouchableOpacity
                onPress={() => {
                  setSearchQuery("");
                  setShowInput(true);
                }}
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
            flexDirection: "row",
            marginHorizontal: 12,
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Friends")}
          >
            <Text style={[styles.white, isActive("Friends") && styles.black]}>
              Friends
            </Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 4 }}>|</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ImageGallery")}
          >
            <Text
              style={[styles.white, isActive("ImageGallery") && styles.black]}
            >
              Images
            </Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 4 }}>|</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ProfilePage")}
          >
            <Text
              style={[styles.white, isActive("ProfilePage") && styles.black]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DrawerContent = (props) => {
  const isActive = (nameOrIndex) => {
    return props.state && props.state.index === nameOrIndex;
  };

  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const onLogout = async () => {
    AsyncStorage.removeItem("user");
    props.navigation.navigate("Login");
    setLoggedIn(false);
  };

  return (
    <SafeAreaView
      {...props}
      style={{ marginTop: isWeb ? 0 : StatusBar.currentHeight, flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        {!loggedIn && (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginHorizontal: 0,
              flexWrap: "nowrap",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 24, color: "#aa0000" }}>Marvel Space</Text>
            <Text
              style={{
                fontSize: 20,
                color: "#aa0000",
              }}
            >
              A space for super friends
            </Text>
          </View>
        )}

        {loggedIn && (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginHorizontal: 0,
              flexWrap: "nowrap",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Friends")}
              style={[styles.btn, isActive(0) && styles.activeBtn]}
            >
              <Text>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ImageGallery")}
              style={[styles.btn, isActive(1) && styles.activeBtn]}
            >
              <Text>Images</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ProfilePage")}
              style={[styles.btn, isActive() && styles.activeBtn]}
            >
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={[styles.btn, styles.btnDanger]}
          onPress={
            loggedIn ? onLogout : () => props.navigation.navigate("Login")
          }
        >
          <Text style={styles.textDanger}>{loggedIn ? "Logout" : "Login"}</Text>
        </TouchableOpacity>
        {!loggedIn && (
          <TouchableOpacity
            style={[styles.btn, styles.btnDanger]}
            onPress={() => {
              props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.textDanger}>SignUp</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const header = (props) => {
  const {
    showInput,
    setShowInput,
    loggedIn,
    searchQuery,
    setSearchQuery,
    searching,
  } = props;

  const onSearch = () => {
    if (searchQuery) {
      props.navigation.navigate("Users");
    }
  };

  return (
    <View {...props} style={styles.header}>
      {showInput ? (
        <View style={styles.inputContainer}>
          <View
            style={[
              styles.inputContainer,
              { backgroundColor: "#fff", paddingRight: 8 },
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={onSearch}
            />
            {searching ? (
              <ActivityIndicator size="small" color={"#aa0000"} />
            ) : (
              <AntDesign
                name="search1"
                size={24}
                color="black"
                onPress={onSearch}
              />
            )}
          </View>
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
          {!isWeb && (
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={props.navigation.toggleDrawer}>
                <AntDesign name="menuunfold" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
          <View
            style={{
              flex: isWeb ? undefined : 1,
              alignItems: "center",
            }}
          >
            {!isWeb && (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Newsfeed")}
              >
                <Image
                  source={require("../../Images/Logo.png")}
                  width={82}
                  height={32}
                  style={{ width: 82, height: 32 }}
                />
              </TouchableOpacity>
            )}
          </View>
          {isWeb && webHeader(props)}

          {!isWeb && (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={() => {
                setSearchQuery("");
                setShowInput(true);
              }}
            >
              {loggedIn && <AntDesign name="search1" size={24} color="black" />}
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

function Drawer({ setStoredToken }) {
  const context = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const userString = await AsyncStorage.getItem("user");

      if (userString) {
        const user = JSON.parse(userString);
        if (user.token) {
          context.setLoggedIn(true);
          navigation.navigate("Newsfeed");
        }
      }
    })();
  }, []);

  return (
    <DrawerNavigation.Navigator
      drawerContent={
        Platform.OS === "web"
          ? undefined
          : (props) => <DrawerContent {...props} />
      }
      screenOptions={{
        header: (props) =>
          header({
            ...props,
            ...context,
          }),
      }}
    >
      {context.loggedIn && (
        <>
          <DrawerNavigation.Screen name="Newsfeed" component={Newsfeed} />
          <DrawerNavigation.Screen name="Friends" component={Friends} />
          <DrawerNavigation.Screen
            name="ImageGallery"
            component={ImageGallery}
          />
          
          <DrawerNavigation.Screen name="ProfilePage" component={ProfilePage} />
          <DrawerNavigation.Screen name="ProfileEdit" component={ProfileEdit} />
          <DrawerNavigation.Screen name="Users" component={Users} />
        </>
      )}
      <DrawerNavigation.Screen name="Login">
        {() => (
          <Login
            setLoggedIn={context.setLoggedIn}
            setStoredToken={setStoredToken}
          />
        )}
      </DrawerNavigation.Screen>
      <DrawerNavigation.Screen name="SignUp" component={SignUp} />
      {/* <DrawerNavigation.Screen name="ResetPassword" component={ResetPassword} /> */}
      <DrawerNavigation.Screen name="About" component={About} />
      <DrawerNavigation.Screen name="Rules" component={Rules} />
      <DrawerNavigation.Screen name="Contact" component={Contact} />
      <DrawerNavigation.Screen name="Terms" component={Terms} />
    </DrawerNavigation.Navigator>
  );
}

const styles = StyleSheet.create({
  btn: { padding: 20 },
  activeBtn: {
    backgroundColor: "#f0f0f0",
  },
  header: {
    marginTop: isWeb ? 0 : StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#f00",
    alignItems: "center",
  },
  btnDanger: {
    backgroundColor: "#aa0000",
  },
  textDanger: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 8,
    backgroundColor: "#fff",
    flex: 1,
  },
  inputCloseIcon: { marginLeft: 8 },
  webInput: {
    backgroundColor: "#fff",
    padding: 8,
    marginRight: 8,
  },
  white: {
    color: "#fff",
  },
  black: {
    color: "#000",
  },
});

export default Drawer;
