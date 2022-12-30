import React, { useState } from "react";
import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
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
const PlaceOrderModal = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    return (
        <Center>
            <Buttone
                onPress={() => setShowModal(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}>
                SHOW TOTAL
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
                        <Button
                            flex={1}
                            bg={Colors.submain}
                            h={45}
                            _text={{
                                color: Colors.white
                            }}
                            onPress={() => {
                                navigation.navigate("Order");
                                setShowModal(false);
                            }}

                            _pressed={{
                                bg: Colors.gold
                            }}>
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default PlaceOrderModal;

