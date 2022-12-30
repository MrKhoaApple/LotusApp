import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  VStack,
} from "native-base";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../services/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import Buttone from "../Components/Buttone";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login, userInfo } = useContext(AuthContext);

  React.useEffect(() => {
    const isLogin = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action and update data
      console.log("b:" + userInfo);
      if (userInfo.email != null) {
        navigation.navigate("Home");
      }
    });
    return isLogin;
  }, [navigation]);

  return (
    <Box flex={1}>
      <Spinner visible={isLoading} />
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/coverscreen.jpg")}
      />
      {/* LOGIN */}
      <Box
        w="full"
        h="full"
        position="absolute"
        top="-90"
        px="4"
        justifyContent="center"
      >
        <VStack space={3} pt="4">
          {/* <Text>login</Text> */}
          <Input
            InputLeftElement={
              <Ionicons name="mail" size={24} color="#e0a141" />
            }
            variant="unstyled"
            placeholder="user@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            pl={2}
            w="70%"
            mx="auto"
            color="#e0a141"
          />
          <Input
            InputLeftElement={<Ionicons name="eye" size={24} color="#e0a141" />}
            variant="unstyled"
            value={password}
            placeholder="******"
            onChangeText={(text) => setPassword(text)}
            type="password"
            pl={2}
            w="70%"
            mx="auto"
            color="#e0a141"
          />
        </VStack>
        <Button
          my={30}
          rounded={10}
          backgroundColor="#219290"
          w="30%"
          marginLeft={10}
          title="Login"
          onPress={() => {
            login(email, password);
            //console.log("a: " + userInfo);
            if (userInfo.email != null) {
              navigation.navigate("Home");
              console.log(userInfo.email);
            }
          }}
          // onPress={() => navigation.navigate("Home")}
        >
          LOGIN
        </Button>
        <Pressable
          mt={4}
          marginLeft={10}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.colors}>REGISTER</Text>
        </Pressable>
      </Box>
      {/*FB AND GG*/}
      <Box
        w="full"
        h="full"
        position="absolute"
        top="150"
        px="4"
        justifyContent="center"
      >
        <View>
          {/* <AntDesign name="facebook-square" size={54} style={styles.fb} />
          <TouchableOpacity style={styles.buttonSocialFB}>
            <Text style={styles.face}>LOGIN WITH FACEBOOK</Text>
          </TouchableOpacity> */}
          <FontAwesome
            name="google"
            size={54}
            color="black"
            style={styles.gg}
          />
          <TouchableOpacity style={styles.buttonSocialGG}>
            <Text style={styles.goo}>LOGIN WITH GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  colors: {
    color: "#e0a141",
  },
  face: {
    color: "black",
  },
  goo: {
    color: "#e0a141",
  },
  buttonSocialFB: {
    height: 50,
    marginTop: 70,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginLeft: 30,
    marginRight: 20,
  },
  buttonSocialGG: {
    height: 50,
    marginTop: 150,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#219290",
    marginLeft: 30,
    marginRight: 20,
  },
  fb: {
    position: "absolute",
    top: 68,
    left: 28,
    zIndex: 10,
    color: "blue",
  },
  gg: {
    position: "absolute",
    top: 148,
    left: 32,
    zIndex: 10,
    color: "white",
  },
});
export default LoginScreen;
