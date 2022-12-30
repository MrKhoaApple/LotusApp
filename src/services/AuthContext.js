import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  // const register = (name, password, email, address, phone) => {
  //   setIsLoading(true);

  //   axios
  //     .post(`${BASE_URL}/auth/signup`, {
  //       name,
  //       password,
  //       email,
  //       address,
  //       phone,
  //     })
  //     .then((res) => {
  //       let userInfo = res.data;
  //       setUserInfo(userInfo);
  //       AsyncStorage.setItem("userInfo", JSON.stringtify(userInfo));
  //       setIsLoading(false);
  //       console.log(userInfo);
  //     })
  //     .catch((e) => {
  //       console.log(`register error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        return true;
      })
      .catch((e) => {
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        console.log(`login failed ${e}`);
        setIsLoading(false);
        return false;
      });
  };

  const signout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/signout`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
