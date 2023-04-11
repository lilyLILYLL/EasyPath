import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "../constants/Screens";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { InterestedPlacesScreen } from "../screens/InterestedPlacesScreen";
import { SettingScreen } from "../screens/SettingScreen";
import { HomeIcon } from "../components/layout/Icons";
import { SettingIcon } from "../components/layout/Icons";
import { RecommendIcon } from "../components/layout/Icons";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
const TabBar = createBottomTabNavigator();
export const TabNavigator = ({ navigation }) => {
    const navigateToWelcomeScreen = () => {
        navigation.navigate(Screens.WELCOME);
    };
    useEffect(() => {
        const unsubcribe = navigation.addListener(
            "focus",
            navigateToWelcomeScreen
        );
        return unsubcribe;
    }, []);
    return (
        <TabBar.Navigator
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {

                //     if (route.name === Screens.WELCOME) {
                //         return <HomeIcon size={40} color={color} />;
                //     } else if (route.name === Screens.INTERESTED_PLACE) {
                //         return <RecommendIcon size={40} color={color} />;
                //     } else {
                //         return <SettingIcon size={40} color={color} />;
                //     }
                // },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: {
                    height: 80,
                    marginHorizontal: 10,
                    marginBottom: 5,
                    borderRadius: 30,
                    paddingVertical: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            })}
        >
            <TabBar.Screen
                name={Screens.WELCOME}
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />

            <TabBar.Screen
                name={Screens.INTERESTED_PLACE}
                component={InterestedPlacesScreen}
                options={{ headerShown: false }}
            />
            <TabBar.Screen
                name={Screens.SETTING}
                component={SettingScreen}
                options={{ headerShown: false }}
            />
        </TabBar.Navigator>
    );
};

const styles = StyleSheet.create({});
