import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
function CartScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg={Colors.submain}>
            {/* Header */}
            <Center w="full" py={5}>
                <Text fontSize={25} bold color={Colors.gold}>
                    Cart
                </Text>
            </Center>
            {/* if cart empty 
            <CartEmpty /> */}
            {/* cart items */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItems />
                {/* Total */}
                <Center mt={5}>
                    <HStack
                        rounded={5}
                        justifyContent="space-between"
                        bg={Colors.white}
                        shadow={2}
                        w="90%"
                        pl={5}
                        h={45}
                        alignItems="center"
                    >
                        <Text bold fontSize={15} >Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={5}
                            bg={Colors.gold}
                            _text={{
                                fontWeight: "semibold",
                                fontSize: "lg"
                            }}
                            _pressed={{
                                bg: Colors.gold
                            }}
                        >
                            $200
                        </Button>
                    </HStack>
                </Center>
                {/* Check out */}
                <Center px={5}>
                    <Buttone
                        onPress={() => navigation.navigate("Shipping")}
                        bg={Colors.lightblack} color={Colors.white} mt={10}>
                        CHECK OUT
                    </Buttone>
                </Center>
            </ScrollView>
        </Box>
    )
}

export default CartScreen;