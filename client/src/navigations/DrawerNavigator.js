import * as React from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

import { SearchPageScreen } from "../screens/SearchPageScreen";
import { InterestedPlacesScreen } from "../screens/InterestedPlacesScreen";
import { MapScreen } from "../screens/MapScreen";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";

const CustomDrawerMenu = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.menuHeaderBox}>
                <Text style={styles.header}>Easy Path</Text>
                <Entypo
                    name="squared-cross"
                    size={30}
                    color={colors.white}
                    onPress={() => {
                        props.navigation.toggleDrawer();
                    }}
                />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="Visit Us" />
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("Home");
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Search"
            drawerContent={(props) => <CustomDrawerMenu {...props} />}
            screenOptions={{
                drawerPosition: "left",
            }}
        >
            <Drawer.Screen
                name="Search"
                component={SearchPageScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen name="MapScreen" component={MapScreen} />
            <Drawer.Screen
                name="Places of Interest"
                component={InterestedPlacesScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    menuHeaderBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 18,
        paddingRight: 10,
        paddingLeft: 50,
        backgroundColor: colors.blue,
        borderRadius: 3,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.white,
    },
    button: {
        backgroundColor: colors.blue,
        padding: 15,
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 20,
        alignSelf: "center",
        color: colors.white,
    },
});
