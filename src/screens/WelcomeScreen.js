import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import colors from "../constants/colors.js";
import { RecentSearchItem } from "../components/RecentSearchItem";
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../contexts/SearchContext";
import Screens from "../constants/Screens";
import { LoadingIcon } from "../components/layout/LoadingIcon";
import { LocationIcon } from "../components/layout/Icons";
import { RoundedSearchBar } from "../components/layout/RoundedSearchBar";

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const { state, fetch } = useContext(SearchContext);

    useEffect(() => {
        fetch();
    }, []);

    const showSuggestionList = () =>
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: Screens.WELCOME,
        });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View>
                <Text style={styles.welcomeText}>Welcome Lilly</Text>
            </View>

            <RoundedSearchBar
                onPress={showSuggestionList}
                placeholderText="Search Your Destination"
                icon={<LocationIcon />}
                autoFocus={false}
            />

            <View style={styles.recentSearch}>
                <Text style={styles.headerText}>Recent Searches</Text>
                <View style={styles.seperator}></View>

                <ScrollView
                    contentContainerStyle={styles.recentSearchScrollView}
                >
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
                </ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Screens.RECENT_SEARCH)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        More from recent history
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 50,
        color: colors.blue,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 10,
    },
    logoView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 30,
        alignItems: "center",
    },

    recentSearch: {
        height: 690,
        marginTop: 15,
        borderRadius: 30,
    },
    recentSearchScrollView: {
        flexGrow: 1,
        paddingBottom: "30%",
    },
    button: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontWeight: "bold",
        color: colors.red,
    },

    headerText: {
        fontSize: 20,
        marginLeft: 30,
        color: colors.blue,
        fontWeight: "bold",
    },
    seperator: {
        marginHorizontal: 25,
        borderRadius: 5,
        marginVertical: 10,
        borderBottomColor: colors.blue,
        borderBottomWidth: 0.8,
    },
    searchBarIcon: {
        marginHorizontal: 20,
        marginTop: 10,
    },
});
