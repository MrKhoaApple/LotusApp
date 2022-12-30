import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
    {
        image: require("../../assets/momo1.png"),
        alt: "momo",
        icon: "AntDesign"
    },
    {
        image: require("../../assets/apple.png"),
        alt: "apple",
        icon: "FontAwesome5"
    },
    {
        image: require("../../assets/paypal.jpg"),
        alt: "paypal",
        icon: "FontAwesome5"
    },

]
function PaymentScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.gold} fontSize={14} bold>
                    PAYMENT METHOD
                </Text>
            </Center>
            {/* Select method to pay */}
            <Box h="full" bg={Colors.input} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <VStack space={4} mt={5} >
                        {paymentMethods.map((i, index) => (
                            <HStack key={index} alignItems='center' bg={Colors.white}
                                px={3} py={1} rounded={5} justifyContent="space-between">
                                <Box>
                                    <Image source={i.image}
                                        alt={i.alt}
                                        resizeMode="contain"
                                        w={60}
                                        h={50} />
                                </Box>
                                <Spacer />
                                {i.icon === "AntDesign"
                                    ? <AntDesign name="checkcircle" size={30} color={Colors.green} />
                                    : <FontAwesome name="circle-thin" size={30} color={Colors.green} />}

                            </HStack>
                        ))}

                    </VStack>


                    <Buttone
                        onPress={() => navigation.navigate("Placeorder")}
                        bg={Colors.submain} color={Colors.white} mt={10} >
                        CONTINUE
                    </Buttone>
                    <Text italic textAlign="center" fontSize={15} bold>Payment method is <Text bold color={Colors.momo}>MoMo</Text> by default</Text>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default PaymentScreen;