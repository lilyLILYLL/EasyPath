import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { HomePageScreen } from "../screens/HomePageScreen";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SearchPageScreen } from "../screens/SearchPageScreen";
import { MapScreen } from "../screens/MapScreen";
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Search"
            //useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#c6cbef",
                    width: 1000,
                },
                drawerPosition: "left",
            }}
        >
            <Drawer.Screen name="Search" component={SearchPageScreen} options={{headerLeft:}}/>
            <Drawer.Screen name="MapScreen" component={MapScreen} />
        </Drawer.Navigator>
    );
};

const MainStack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                {/* <MainStack.Navigator initialRouteName="Home">
                    <MainStack.Screen
                        name="Home"
                        component={HomePageScreen}
                        options={{ headerShown: false }}
                    />
                    <MainStack.Screen
                        name="DrawerNavigator"
                        component={DrawerNavigator}
                    />
                </MainStack.Navigator> */}
                <DrawerNavigator />
            </NavigationContainer>
        </AuthContextProvider>
    );
};
