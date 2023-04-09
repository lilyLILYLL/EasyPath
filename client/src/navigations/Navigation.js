import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SearchContextProvider } from "../contexts/SearchContext";
import { LocationContextProvider } from "../contexts/LocationContext";
import { LoginScreen } from "../screens/LoginScreen";
import { DrawerNavigator } from "../navigations/DrawerNavigator";
import { MapScreen } from "../screens/MapScreen";
import { SearchSuggestionScreen } from "../screens/SearchSuggestionScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { navigationRef } from "./RootNavigation";
import { RecentSearchScreen } from "../screens/RecentSearchScreen";
import Screens from "../constants/Screens";
const MainStack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <AuthContextProvider>
            <SearchContextProvider>
                <LocationContextProvider>
                    <NavigationContainer ref={navigationRef}>
                        <MainStack.Navigator initialRouteName={Screens.LOADING}>
                            <MainStack.Screen
                                name={Screens.LOADING}
                                component={LoadingScreen}
                                options={{ headerShown: false }}
                            />
                            <MainStack.Screen
                                name={Screens.LOGIN}
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />
                            <MainStack.Screen
                                name={Screens.DRAWER_NAVIGATOR}
                                component={DrawerNavigator}
                                options={{ headerShown: false }}
                            />
                            <MainStack.Screen
                                name={Screens.MAP}
                                component={MapScreen}
                                options={{ headerShown: false }}
                            />

                            <MainStack.Screen
                                name={Screens.SUGGESTION}
                                component={SearchSuggestionScreen}
                                options={{ headerShown: false }}
                            />
                            <MainStack.Screen
                                name={Screens.RECENT_SEARCH}
                                component={RecentSearchScreen}
                                options={{ headerShown: false }}
                            />
                        </MainStack.Navigator>
                    </NavigationContainer>
                </LocationContextProvider>
            </SearchContextProvider>
        </AuthContextProvider>
    );
};
