import { useNavigation } from "@react-navigation/native";
import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
    {
        label: "CITY",
        type: "text"
    },
    {
        label: "WARD",
        type: "text"
    },
    {
        label: "DISTRICT",
        type: "text"
    },
    {
        label: "ADDRESS",
        type: "text"
    },
]
function ShippingScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.gold} fontSize={14} bold>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            {/* Input */}
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {ShippingInputs.map((i, index) => (
                        <VStack space={4} mt={5} >
                            <FormControl key={index}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {i.label}
                                </FormControl.Label>
                                <Input
                                    borderWidth={0.2}
                                    borderColor={Colors.submain}
                                    bg={Colors.input}
                                    py={3}
                                    type={i.type}
                                    color={Colors.lightblack}
                                    fontWeight="bold"
                                    _focus={{
                                        bg: Colors.input,
                                        borderWidth: 1,
                                        borderColor: Colors.submain
                                    }}

                                />
                            </FormControl>
                        </VStack>
                    ))}

                    <Buttone
                        onPress={() => navigation.navigate("Checkout")}
                        bg={Colors.submain} color={Colors.white} mt={10} >
                        CONTINUE
                    </Buttone>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen;