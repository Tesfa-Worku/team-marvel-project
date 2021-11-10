import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { WP_POST } from "./WPAPI";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (loading) {
      WP_POST("token", "", {
        username: `${username}`,
        password: `${password}`,
      }).then((data) => {
        data.token ? formSuccess(data) : formError(data);
      });
    }
  }, [loading]);

  const nav = useNavigation();

  const formSuccess = (data) => {
    setToken(data.token);
    setLoading(false);
    setUsername("");
    setPassword("");
    setLoggedIn(true);
    nav.navigate("Newsfeed");
  };

  const formError = (data) => {
    const regex = /<[^>]*>/g;
    setLoading(false);
    setPassword("");
    if (data?.message) {
      return Alert.alert("alert", data.message.replace(regex, ""));
    }
  };

  const onFormSubmit = () => {
    setError("");
    setLoading(true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username here"
          value={username}
          onChangeText={(usernameValue) => setUsername(usernameValue)}
          onSubmitEditing={onFormSubmit}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={onFormSubmit}
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            onFormSubmit();
          }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text onPress={() => nav.navigate("ResetPassword")}>
          {" "}
          Reset Password{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  inputContainer: {
    marginVertical: 12,
  },
  label: { marginBottom: 6 },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
  },
  btn: {
    backgroundColor: "#f00",
    flex: 1,
    padding: 12,
  },
  row: {
    flexDirection: "row",
  },
  btnText: { color: "#fff", fontSize: 16 },
});

export default Login;
