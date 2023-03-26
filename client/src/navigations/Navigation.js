import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { LocationContextProvider } from "../contexts/LocationContext";
import { DrawerNavigator } from "./DrawerNavigator";
import { LoginScreen } from "../screens/LoginScreen";
import { SearchSuggestionScreen } from "../screens/SearchSuggestionScreen";
import { navigationRef } from "./RootNavigation";
const MainStack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <AuthContextProvider>
            <SearchContextProvider>
                <LocationContextProvider>
                    <NavigationContainer ref={navigationRef}>
                        <MainStack.Navigator initialRouteName="LoginScreen">
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
                            <MainStack.Screen
                                name="SearchSuggestionScreen"
                                component={SearchSuggestionScreen}
                                options={{ headerShown: false }}
                            />
                        </MainStack.Navigator>
                    </NavigationContainer>
                </LocationContextProvider>
            </SearchContextProvider>
        </AuthContextProvider>
    );
};
