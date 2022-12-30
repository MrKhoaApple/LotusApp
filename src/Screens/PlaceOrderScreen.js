import { Box, ScrollView, Heading } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import OrderItems from "../Components/OrderItems";
import PlaceOrderModal from "../Components/PlaceOrderModal";

function PlaceOrderScreen() {
    return (
        <Box bg={Colors.input} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <OrderInfo title="CUSTOMER" subTitle="KhoaLe" text="KhoaLe@gmail.com"
                        icont={<FontAwesome name="user-secret" size={30} color={Colors.white} />} />
                    <OrderInfo title="ORDER INFO" subTitle="Shipping: DuyLe" text="Payment Method: MoMo"
                        icont={<FontAwesome5 name="shipping-fast" size={24} color={Colors.white} />} />
                    <OrderInfo title="DELIVERY TO" subTitle="Address: " text="FPT-APTECH 590 CMT8"
                        icont={<FontAwesome name="location-arrow" size={24} color={Colors.white} />} />
                </ScrollView>
            </Box>
            {/* order items */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4} >PRODUCTS</Heading>
                <OrderItems />
                {/* total order */}
                <PlaceOrderModal />
            </Box>
        </Box>
    )
}

export default PlaceOrderScreen;