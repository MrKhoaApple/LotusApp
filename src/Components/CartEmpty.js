import { Box, Center, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "./Buttone";
function CartEmpty() {
    return (
        <Box flex={1} px={5}>
            {/* Header */}
            <Center h='90%'>
                <Center w={200} h={200} bg={Colors.white} rounded="full">
                    <FontAwesome name="shopping-bag" size={64} color={Colors.gold} />
                </Center>
                <Text color={Colors.gold} bold mt={5} fontSize={25}>CART IS EMPTY</Text>
            </Center>
            <Buttone bg={Colors.white} color={Colors.gold} fontSize={20} >START SHOPPING</Buttone>
        </Box>
    )
}

export default CartEmpty;