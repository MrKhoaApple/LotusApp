// import {
//   Box,
//   Button,
//   Image,
//   Input,
//   Pressable,
//   VStack,
//   Radio,
//   ListItem,
// } from "native-base";
// import React, { useContext, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
// import { AuthContext } from "../services/AuthContext";
// import Spinner from "react-native-loading-spinner-overlay";

// function RegisterScreen({ navigation }) {
//   const [name, setName] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [address, setAddress] = useState(null);
//   const [phone, setPhone] = useState(null);
//   const { isLoading, register } = useContext(AuthContext);
//   return (
//     <Box flex={1}>
//       <Spinner visible={isLoading} />
//       <Image
//         flex={1}
//         alt="Logo"
//         resizeMode="cover"
//         size="lg"
//         w="full"
//         source={require("../../assets/coverscreen.jpg")}
//       />
//       {/* REGISTER */}
//       <Box
//         w="full"
//         h="full"
//         position="absolute"
//         top="50"
//         px="4"
//         justifyContent="center"
//       >
//         <VStack space={3} pt="4">
//           {/* USERNAME */}
//           <Text>{register}</Text>
//           <Input
//             InputLeftElement={
//               <FontAwesome name="user" size={24} color="#e0a141" />
//             }
//             variant="unstyled"
//             placeholder="JohnSmith"
//             pl={2}
//             w="70%"
//             mx="auto"
//             color="#e0a141"
//           />
//           {/* PASSWORD */}
//           <Input
//             InputLeftElement={<Ionicons name="eye" size={24} color="#e0a141" />}
//             variant="unstyled"
//             placeholder="******"
//             type="password"
//             pl={2}
//             w="70%"
//             mx="auto"
//             color="#e0a141"
//           />
//           {/* EMAIL */}
//           <Input
//             InputLeftElement={
//               <Ionicons name="mail" size={24} color="#e0a141" />
//             }
//             variant="unstyled"
//             placeholder="user@gmail.com"
//             pl={2}
//             w="70%"
//             mx="auto"
//             color="#e0a141"
//           />
//           {/* ADDRESS */}
//           <Input
//             InputLeftElement={
//               <Ionicons name="md-home-sharp" size={24} color="#e0a141" />
//             }
//             variant="unstyled"
//             placeholder="USA"
//             pl={2}
//             w="70%"
//             mx="auto"
//             color="#e0a141"
//           />
//           {/* PHONE */}
//           <Input
//             InputLeftElement={
//               <Fontisto name="mobile-alt" size={24} color="#e0a141" />
//             }
//             variant="unstyled"
//             placeholder="09xxxxxxx"
//             pl={2}
//             w="70%"
//             mx="auto"
//             color="#e0a141"
//           />
//         </VStack>
//         <Button
//           my={30}
//           rounded={10}
//           backgroundColor="#219290"
//           w="30%"
//           marginLeft={10}
//           onPress={() => navigation.navigate("Bottom")}
//         >
//           REGISTER
//         </Button>
//         <Pressable
//           mt={4}
//           marginLeft={10}
//           onPress={() => navigation.navigate("Login")}
//         >
//           <Text style={styles.colors}>SIGNIN</Text>
//         </Pressable>
//       </Box>
//     </Box>
//   );
// }
// const styles = StyleSheet.create({
//   colors: {
//     color: "#e0a141",
//   },
// });

// export default RegisterScreen;
