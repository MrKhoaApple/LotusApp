import { Box } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../color";
import Spinner from "react-native-loading-spinner-overlay";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";
import { AuthContext } from "../services/AuthContext";
function HomeScreen() {
  // const { userInfo, isLoading } = useContext(AuthContext);

  return (
    <Box flex={1} backgroundColor="white">
      {/* <Spinner visible={isLoading} /> */}
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
