import { Box, HStack, Input, Pressable } from "native-base";
import { StyleSheet, Button } from "react-native";
import React, { useContext, useState } from "react";
import Colors from "../color";
import { AuthContext } from "../services/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeSearch() {
  const { login, signout, userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      backgroundColor="#015351"
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Button
        title="Signout"
        color="red"
        onPress={() => {
          //   signout;
          login("", "");
          navigation.navigate("Login");
        }}
      />

      <Input
        placeholder="Bread,Sausage,Crosssaint,Coke,SoftDrink...."
        fontSize={12}
        _focus={{
          color: Colors.gold,
        }}
        variant="filled"
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <MaterialIcons name="shopping-bag" size={24} color="#e0a141" />
        <Box
          px={1}
          position="absolute"
          top={-13}
          left={3}
          _text={{
            color: Colors.red,
            fontSize: "13px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
const styles = StyleSheet.create({
  bag: {
    color: "ff0000",
  },
});
export default HomeSearch;
