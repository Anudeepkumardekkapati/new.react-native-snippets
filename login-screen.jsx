import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {

    if (email === "admin@gmail.com" && password === "123456") {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Email or Password");
    }

  };

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:20,gap:10}}>

      <Text variant="headlineMedium">Login</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        style={{width:"100%"}}
      />

      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text)=>setPassword(text)}
        style={{width:"100%"}}
      />

      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>

      <Text>{message}</Text>

    </View>
  );
};

export default LoginScreen;