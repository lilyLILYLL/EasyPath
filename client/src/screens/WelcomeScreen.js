import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { HeadBar } from "../components/layout/HeadBar";
import { SearchBar } from "../components/layout/SearchBar";
import colors from "../constants/colors.js";
import { RecentSearchItem } from "../components/RecentSearchItem";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../components/layout/Logo";
import { SearchContext } from "../contexts/SearchContext";
import moment from "moment";
import Screens from "../constants/Screens";
import { LoadingIcon } from "../components/layout/LoadingIcon";
import { MenuIcon } from "../components/layout/Icons";
import { ButtonForm } from "../components/layout/ButtonForm";

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const { state, fetch } = useContext(SearchContext);
    const currentDate = moment().format("DD/MM/YYYY");

    useEffect(() => {
        fetch();
    }, []);

    const toggleDrawer = () => {
        navigation.openDrawer();
    };

    const showSuggestionList = () =>
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: Screens.WELCOME,
        });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <HeadBar
                header="Welcome John Doe"
                onPress={toggleDrawer}
                icon={<MenuIcon />}
            />
            <SearchBar
                onPress={showSuggestionList}
                placeholderText="Search here"
            />

            <View>
                <View style={styles.logoView}>
                    <Text style={styles.lastLogin}>
                        Last Login: {currentDate}
                    </Text>
                    <Logo size={1 / 4} />
                </View>
                <View style={styles.recentSearch}>
                    <Text style={styles.headerText}>Recent Searches</Text>
                    <View style={styles.seperator}></View>

                    <ScrollView>
                        {state.isLoading ? (
                            <LoadingIcon />
                        ) : (
                            state.recentSearch &&
                            state.recentSearch
                                .slice(0, 9)
                                .map(({ from, to, date, time }, index) => {
                                    return (
                                        <RecentSearchItem
                                            startLocation={from}
                                            destination={to}
                                            date={date}
                                            time={time}
                                            key={index}
                                        />
                                    );
                                })
                        )}
                        <ButtonForm
                            buttonText="More searches"
                            onPress={() =>
                                navigation.navigate(Screens.RECENT_SEARCH)
                            }
                        />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        marginVertical: 10,
    },
});
