import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "../contexts/AuthContext";
import { DrawerNavigator } from "./DrawerNavigator";
import { HomePageScreen } from "../screens/HomePageScreen";

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
                        name="DrawerNavigator"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </AuthContextProvider>
    );
};
