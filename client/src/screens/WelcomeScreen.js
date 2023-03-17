import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { HeadBar } from "../components/HeadBar";
import { SearchBar } from "../components/SearchBar";
import colors from "../constants/colors.js";
import { RecentSearchItem } from "../components/RecentSearchItem";
import { StatusBar } from "expo-status-bar";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Logo } from "../components/Logo";
import { SearchContext } from "../contexts/SearchContext";

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const { recentSearch } = useContext(SearchContext);

    const toggleDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <HeadBar header="Welcome John Doe" onPress={toggleDrawer} />
            <SearchBar />
            <View style={styles.logoView}>
                <Text style={styles.lastLogin}>Last Login: 10/10/2022</Text>
                <Logo size={1 / 4} />
            </View>
            <View style={styles.recentSearch}>
                <Text style={styles.headerText}>Recent Searches</Text>
                <View style={styles.seperator}></View>

                <ScrollView>
                    {recentSearch &&
                        recentSearch.map(({ from, to, date, time }, index) => {
                            return (
                                <RecentSearchItem
                                    startLocation={from}
                                    destination={to}
                                    date={date}
                                    time={time}
                                    key={index}
                                />
                            );
                        })}
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
