import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Text } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../color";
import Orders from "./Orders";
import Profile from "./Profile";

const renderScene = SceneMap(
    {
        first: Profile,
        second: Orders
    }
)
export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "first",
            title: "PROFILE"
        },
        {
            key: "second",
            title: "ORDERS"
        }
    ]);
    const renderTabsBar = (props) => (
        <TabBar {...props} tabStyle={styles.tabStyle}
            // indicatorStyle={Colors.gold}
            // activeColor={Colors.main} inactiveColor={Colors.white}
            renderLabel={({ route }) => (
                <Text style={{ ...styles.text }}>{route.title}</Text>
            )}
        />
    );
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabsBar}
        />

    );
}
const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: "#e0a141"
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#015351"
    },

})

