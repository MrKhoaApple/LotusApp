import { Box, Button, Center, Image, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Colors from "../color";
import Buttone from "../Components/Buttone";
function NotVerifyScreen() {
    return (
        <Box flex={1} backgroundColor="#015351" safeAreaTop>
            <Center w="full" h={250}>
                <Image
                    source={require("../../assets/coverscreen.jpg")}
                    alt="Logo"
                    size="lg"
                    flex={1}
                    resizeMode="cover"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone backgroundColor={Colors.submain} color={Colors.gold}>REGISTER</Buttone>
                <Buttone bg={Colors.white} color={Colors.main}>LOGIN</Buttone>
            </VStack>
        </Box>
    )
}

export default NotVerifyScreen;