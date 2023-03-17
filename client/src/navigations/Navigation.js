import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { DrawerNavigator } from "./DrawerNavigator";
import { LoginScreen } from "../screens/LoginScreen";

const MainStack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <AuthContextProvider>
            <SearchContextProvider>
                <NavigationContainer>
                    <MainStack.Navigator initialRouteName="DrawerNavigator">
                        <MainStack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <MainStack.Screen
                            name="DrawerNavigator"
                            component={DrawerNavigator}
                            options={{ headerShown: false }}
                        />
                    </MainStack.Navigator>
                </NavigationContainer>
            </SearchContextProvider>
        </AuthContextProvider>
    );
};
