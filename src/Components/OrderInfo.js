import React from "react";
import { Center, Heading, Text } from "native-base";
import Colors from "../color";

const OrderInfo = ({ icont, title, subTitle, text, success, danger }) => {
    return (
        <Center borderColor={Colors.gold} borderWidth={2} bg={Colors.white} w={200} py={2}
            shadow={2} mb={2} ml={5} mr={1} px={4} rounded={5} >
            <Center bg={Colors.submain} w={60} h={60} rounded="full">
                {icont}
            </Center>
            <Heading bold fontSize={12} isTruncated
                mt={3} mb={2} color={Colors.lightblack} >
                {title}
            </Heading>
            <Text fontSize={13} color={Colors.lightblack}>{subTitle}</Text>
            <Text fontSize={13} color={Colors.lightblack} italic textAlign="center">{text}</Text>
            {/* status */}
            {success && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
                    <Text fontSize={12} color={Colors.white}>Paid on Oct 15 2022</Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
                    <Text fontSize={12} color={Colors.white}>Not delivery</Text>
                </Center>
            )}
        </Center>
    )
}

export default OrderInfo;