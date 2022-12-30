import {
  Box,
  Center,
  HStack,
  Pressable,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";
import React from "react";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "./Buttone";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Product";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 6)}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false}
  />
);
const renderItems = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={5}
        overflow="hidden"
      >
        <Center w="25%">
          <Image
            source={{ uri: data.product.image }}
            alt={data.item.name}
            w="full"
            h={24}
          />
        </Center>
        <VStack w="60%" px={2} space={3}>
          <Text isTruncated color={Colors.black} bold fontSize={12}>
            {data.item.name}
          </Text>
          <Text color={Colors.lightblack}>${data.item.price}</Text>
        </VStack>
        <Center>
          <Button
            bg={Colors.submain}
            _pressed={{ bg: Colors.main }}
            _text={{ color: Colors.white }}
          >
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);
// hidden items
const renderHiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);
const CartItems = () => {
  return (
    <Box mr={6}>
      {/* Header */}
      <Swiper />
    </Box>
  );
};

export default CartItems;
