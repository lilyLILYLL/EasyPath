import { PlatformColor, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "../constants/Screens";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { InterestedPlacesScreen } from "../screens/InterestedPlacesScreen";
import { SettingScreen } from "../screens/SettingScreen";

import {
    MaterialCommunityIcons,
    Octicons,
    MaterialIcons,
} from "@expo/vector-icons";
import colors from "../constants/colors";
const TabBar = createBottomTabNavigator();
export const TabNavigator = ({ navigation }) => {
    const navigateToWelcomeScreen = () => {
        navigation.navigate(Screens.WELCOME);
    };
    // useEffect(() => {
    //     const unsubcribe = navigation.addListener(
    //         "focus",
    //         navigateToWelcomeScreen
    //     );
    //     return unsubcribe;
    // }, []);
    return (
        <TabBar.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.red,
                tabBarInactiveTintColor: colors.black,
                tabBarStyle: {
                    height: 80,
                    borderRadius: 30,
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 10,
                    paddingBottom: 20,
                    // shadow
                    backgroundColor: colors.white,
                    shadowColor: colors.shadowColor,
                    shadowOffset: {
                        width: 1,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                },
            })}
        >
            <TabBar.Screen
                name={Screens.WELCOME}
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="home" color={color} size={27} />
                    ),
                }}
            />
            <TabBar.Screen
                name={Screens.INTERESTED_PLACE}
                component={InterestedPlacesScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="recommend"
                            color={color}
                            size={27}
                        />
                    ),
                }}
            />

            <TabBar.Screen
                name={Screens.SETTING}
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="gear" color={color} size={27} />
                    ),
                }}
            />
        </TabBar.Navigator>
    );
};

const styles = StyleSheet.create({});
