import { View, Text } from "react-native";
import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../color";
import Buttone from "../Buttone";
const Inputs = [
    {
        lable: "USERNAME",
        type: "text"
    },
    {
        lable: "EMAIL",
        type: "text"
    },
    {
        lable: "NEW PASSWORD",
        type: "password"
    },
    {
        lable: "CONFIRM PASSWORD",
        type: "password"
    },
]
const Profile = () => {
    return (
        <Box h='full' bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <VStack space={10} mt={5} pb={10}>
                    {
                        Inputs.map((i, index) => (
                            <FormControl key={index}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {i.lable}
                                </FormControl.Label>
                                <Input borderWidth={0} bg={Colors.input} py={2}
                                    type={i.type}
                                    color={Colors.black}
                                    fontSize={15}
                                    _focus={{
                                        bg: Colors.submain,
                                        borderColor: Colors.main,
                                        borderWidth: 1
                                    }}
                                />
                            </FormControl>
                        ))
                    }
                    <Buttone bg={Colors.submain} color={Colors.white}>
                        UPDATE PROFILE
                    </Buttone>
                </VStack>
            </ScrollView>
        </Box>
    )
}
export default Profile;