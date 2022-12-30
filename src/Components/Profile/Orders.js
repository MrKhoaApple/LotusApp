import { View, } from "react-native";
import React from "react";
import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import Colors from "../../color";

const Orders = () => {
    return (
        <Box h='full' bg={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* ORDER PAID */}
                <Pressable>
                    <HStack space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        bg={Colors.input}
                        py={5}
                        px={2}>
                        <Text fontSize={11} color={Colors.blue} isTruncated bold >00123456789</Text>
                        <Text fontSize={13} color={Colors.lightblack} isTruncated bold >PAID</Text>
                        <Text fontSize={11} color={Colors.blue} isTruncated bold italic>Oct 14 2022</Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={5}
                            bg={Colors.gold}
                            _text={{
                                color: Colors.white,
                                fontWeight: "bold"
                            }}
                            _pressed={{
                                bg: Colors.submain
                            }}>$200</Button>
                    </HStack>
                </Pressable>
                {/* ORDER NOT PAID */}
                <Pressable>
                    <HStack space={4}
                        justifyContent="space-between"
                        alignItems="center"

                        py={5}
                        px={2}>
                        <Text fontSize={11} color={Colors.blue} isTruncated bold >00123456790</Text>
                        <Text fontSize={13} color={Colors.black} isTruncated bold >NOT PAY</Text>
                        <Text fontSize={11} color={Colors.blue} isTruncated bold italic>Sep 14 2022</Text>
                        <Button
                            px={7}
                            py={1.5}
                            rounded={5}
                            bg={Colors.red}
                            _text={{
                                color: Colors.white,
                                fontWeight: "bold"
                            }}
                            _pressed={{
                                bg: Colors.submain
                            }}>$250</Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}
export default Orders;