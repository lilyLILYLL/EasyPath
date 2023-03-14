import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePageScreen } from "../screens/HomePageScreen";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SearchPageScreen } from "../screens/SearchPageScreen";
import { GuestLoginScreen } from "../screens/GuestLoginScreen";
const MainStack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="Home">
                    <MainStack.Screen
                        name="Home"
                        component={HomePageScreen}
                        options={{ headerShown: false }}
                    />
                    <MainStack.Screen
                        name="Search"
                        component={SearchPageScreen}
                    />
                    <MainStack.Screen
                        name="GuestLogin"
                        component={GuestLoginScreen}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </AuthContextProvider>
    );
};
