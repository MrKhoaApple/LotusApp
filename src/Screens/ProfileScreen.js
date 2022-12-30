import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
function ProfileScreen() {
    return (
        <>
            <Center bg={Colors.main} pt={10} pb={6} >
                <Image
                    source={{ uri: "https://res.cloudinary.com/dnfyqflw5/image/upload/v1665758776/LotusApp/profile_qt8eri.png" }}
                    alt="profile"
                    bg={Colors.main}
                    w={24}
                    h={24}
                    resizeMode="cover" />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.gold}>
                    John Smith
                </Heading>
                <Text italic fontSize={10} color={Colors.white}>Joined Oct 14 2022</Text>
            </Center>
            {/* TAB */}
            <Tabs />
        </>
    )
}

export default ProfileScreen;