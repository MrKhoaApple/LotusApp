import React from "react";
import { Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base";
import products from '../data/Product'
import Colors from "../color";

const OrderItems = () => {
    return (
        <FlatList showsVerticalScrollIndicator={false}
            data={products.slice(0, 3)}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack
                            alignItems="center"
                            bg={Colors.white}
                            shadow={1}
                            rounded={5}
                            overflow="hidden">
                            <Center
                                w="25%"
                                bg={Colors.white}
                                borderRightColor={Colors.gold}
                                borderLeftColor={Colors.white}
                                borderTopColor={Colors.white}
                                borderBottomColor={Colors.white}
                                borderWidth={2}>
                                <Image source={{ uri: item.image }}
                                    alt={item.name}
                                    w='full'
                                    h={24}
                                    resizeMode="contain" />
                            </Center>
                            <VStack w='60%' px={2}>
                                <Text isTruncated color={Colors.lightblack} bold fontSize={14}>
                                    {item.name}
                                </Text>
                                <Text isTruncated color={Colors.green} bold fontSize={12}>
                                    ${item.price}
                                </Text>
                            </VStack>
                            <Center>
                                <Button
                                    bg={Colors.submain}
                                    _pressed={{ bg: Colors.gold }}
                                    _text={{
                                        color: Colors.white
                                    }}
                                >5</Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        />
    )
}

export default OrderItems;

