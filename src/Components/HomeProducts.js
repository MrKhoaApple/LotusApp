import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import { BASE_URL } from "../services/config";
// import { services } from "../services/services";
import Colors from "../color";
import { products } from "../data/Product";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   services("products")
  //     .then((data) => setList(data))
  //     .catch((err) => alert(err));
  // }, []);
  useEffect(() => {
    getProductlist();
  }, []);
  const getProductlist = () => {
    //fetch("http://172.16.1.4:8989/api/products", {
    fetch(`${BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Conten-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        var data = res;
        setList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {list.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product.productId}
            w="47%"
            bg={Colors.white}
            borderColor={Colors.gold}
            borderWidth={3}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                {product.price} VND
              </Heading>
              <Text fontSize={15} mt={1} isTruncated w="full">
                {product.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}
export default HomeProducts;
