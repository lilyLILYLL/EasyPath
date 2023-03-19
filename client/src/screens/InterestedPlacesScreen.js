import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { HeadBar } from "../components/HeadBar";
import { SearchBar } from "../components/SearchBar";
import { InterestedPlaces } from "../components/InterestedPlaces";
import { Logo } from "../components/Logo";
export const InterestedPlacesScreen = ({ navigation }) => {
    const toggleDrawer = () => {
        navigation.openDrawer();
    };
    const showSuggestionList = () =>
        navigation.push("SearchSuggestionScreen", {
            placeholderText: "Choose Destination",
            title: "destination",
        });
    return (
        <SafeAreaView>
            <HeadBar header="Places of Interest" onPress={toggleDrawer} />
            <SearchBar
                onPress={showSuggestionList}
                placeholderText="Search here"
            />
            <View style={styles.contentBox}>
                <InterestedPlaces />
                <View style={styles.logo}>
                    <Logo size={1 / 4} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentBox: {
        flexDirection: "row",
    },
    logo: {
        paddingTop: 25,
        paddingLeft: 20,
    },
});
