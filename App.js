import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import OrderScreen from "./src/Screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import BottomNav from "./src/Navigations/BottomNav";
import React from "react";
import { AuthProvider } from "./src/services/AuthContext";
import { AuthContext } from "./src/services/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={false} />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Single" component={SingleProductScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Bottom" component={BottomNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}
