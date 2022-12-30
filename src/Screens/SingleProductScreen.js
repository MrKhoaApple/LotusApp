import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, Image, Heading, HStack, Spacer } from "native-base";
import React, { useState } from "react";

import { Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  const dataCart = { product, value };

  return (
    <Box safeArea flex={1} backgroundColor="white">
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          {product.quantity > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              minValue={0}
              maxValue={product.quantity}
              rounded
              iconStyle={{ color: Colors.main }}
              rightButtonBackgroundColor={Colors.gold}
              leftButtonBackgroundColor={Colors.gold}
              bold
            />
          ) : (
            <Heading bold color={Colors.red} italic fontSize={22}>
              Out Of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color="black" fontSize={22}>
            {product.price} VND
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart", dataCart)}
          bg={Colors.main}
          color={Colors.gold}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
