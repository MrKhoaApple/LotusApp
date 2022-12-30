import React, { useState } from "react";
import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from "native-base";
import Buttone from "./Buttone";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
const OrdersInfo = [
    {
        title: "Product",
        price: 234.5,
        color: "#02c7c2"
    },
    {
        title: "Shipping fee",
        price: 20.5,
        color: "#02c7c2"
    },
    {
        title: "VAT",
        price: 5.5,
        color: "#02c7c2"
    },
    {
        title: "Total amount",
        price: 290.5,
        color: "#e0a141"
    },
]
const OrderModal = () => {
    const navigation = useNavigation()
    const [showModal, setShowModal] = useState(false);
    return (
        <Center>
            <Buttone
                onPress={() => setShowModal(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}>
                SHOW TOTAL & PAYMENT
            </Buttone>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size='lg'>
                <Modal.Content maxWidth={350} borderColor={Colors.gold} borderWidth={4}>

                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfo.map((i, index) => (
                                <HStack key={index} alignItems="center" justifyContent="space-between">
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text color={i.color === "#e0a141" ? Colors.gold : Colors.green} bold>${i.price}</Text>
                                </HStack>
                            ))}</VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable
                            rounded={3}
                            overflow="hidden"
                            w='full'
                            justifyContent="center"
                            bg={Colors.momo}
                            h={45}
                            onPress={() => setShowModal(false)}>
                            <Image
                                source={require("../../assets/momo1.png")}

                                alt="momo"
                                resizeMode="contain"
                                w='full'
                                h={34} />
                        </Pressable>
                        <Button
                            mt={2}
                            flex={1}
                            bg={Colors.submain}
                            h={45}
                            _text={{
                                color: Colors.white
                            }}
                            onPress={() => {
                                navigation.navigate("Home");
                                setShowModal(false);
                            }}
                            _pressed={{
                                bg: Colors.gold
                            }}>
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModal;

