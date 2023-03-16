import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
} from "react-native";
import React from "react";
import { HeadBar } from "../components/HeadBar";
import { SearchBar } from "../components/SearchBar";
import colors from "../constants/colors.js";
import { RecentSearchItem } from "../components/RecentSearchItem";
import { StatusBar } from "expo-status-bar";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const screen = Dimensions.get("window");
const radio = screen.width / 1417;
export const SearchPageScreen = (props) => {
    const navigation = useNavigation();
    console.log(props);
    console.log(navigation);
    const toggleDrawer = () => {
        console.log("toggle Drawer");
        navigation.openDrawer();
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <HeadBar header="Welcome John Doe" onPress={toggleDrawer} />
            <SearchBar />
            <View style={styles.logoView}>
                <Text style={styles.lastLogin}>Last Login: 10/10/2022</Text>
                <Image
                    source={require("../assets/UOWLogos/UOW_Primary_RGB_Black.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.recentSearch}>
                <Text style={styles.headerText}>Recent Searches</Text>
                <View style={styles.seperator}></View>

                <ScrollView>
                    <RecentSearchItem />
                    <RecentSearchItem />
                    <RecentSearchItem />
                    <RecentSearchItem />
                    <RecentSearchItem />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {},
    logoView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 30,
        alignItems: "center",
    },
    lastLogin: {
        fontSize: 16,
        color: colors.blue,
    },
    logo: {
        width: screen.width / 5,
        height: (1166 * radio) / 5,
    },
    recentSearch: {
        height: 600,
    },

    headerText: {
        fontSize: 30,
        marginLeft: 30,
        color: colors.blue,
    },
    seperator: {
        borderColor: colors.blue,
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 5,
    },
});
