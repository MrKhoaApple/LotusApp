import { Box, FormControl, Heading, TextArea, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Colors from "../color";
import Buttone from "./Buttone";
import Message from "./Notification/Message";
function Review() {
    return (
        <Box my={9} >
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>

            {/* customer review */}
            <Box p={3} bg={Colors.green} mt={5} rounded={5} >
                <Heading fontSize={15} color="black" marginBottom={1}>User John</Heading>
                <Text my={2} fontSize={12}>Oct 13 2022</Text>
                <Message
                    color="black"
                    bg={Colors.white}
                    size={12}
                    children={"NativeBase v1.x : NativeBase started out as an open source framework that enabled developers to build high-quality mobile apps using React Native. The first version included UITabBar on iOS and Drawer on Android."}
                />
            </Box>
            {/* write review */}
            {/* <Box mt={6} >
                <Heading fontSize={15} bold mb={4}>LEAVE COMMENT</Heading>
                <VStack space={6}>
                    <FormControl>
                        <TextArea
                            h={20}
                            w="full"
                            placeholder="I love this product..."
                            placeholderTextColor={Colors.white}
                            borderWidth={0}
                            bg={Colors.green}
                            py={4}
                            _focus={{
                                bg: Colors.green
                            }}
                        />
                    </FormControl>
                    <Buttone bg={Colors.main} color={Colors.gold}>SUBMIT</Buttone>
                    
                    <Message
                        color="white"
                        bg={Colors.warning}
                        size={12}
                        children={"PLEASE 'LOGIN' TO REVIEW THIS PRODUCT."}
                    />
                </VStack>
            </Box> */}
        </Box>
    )
}

export default Review;