"use strict";

import React from "react";
import { Center, Pressable, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../color";
import { StyleSheet } from "react-native";
import StackNav from "./StackNav";
const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={Colors.submain}
    top={-20}
    shadow={2}
  >
    {children}
  </Pressable>
);
const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Homepage" //change "Main" to "Homepage"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* home */}
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.white} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.gold} />
              )}
            </Center>
          ),
        }}
      />
      {/* shopping cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="shopping-cart" size={24} color={Colors.white} />
              ) : (
                <AntDesign name="shoppingcart" size={24} color={Colors.gold} />
              )}
            </Center>
          ),
        }}
      />
      {/* profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="user" size={24} color={Colors.white} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.gold} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.main,
    height: 60,
  },
});
export default BottomNav;
