import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { InterestedPlaces } from "../components/InterestedPlaces";
import Screens from "../constants/Screens";
import { RoundedSearchBar } from "../components/layout/RoundedSearchBar";
import { LocationIcon } from "../components/layout/Icons";
export const InterestedPlacesScreen = ({ navigation }) => {
    const toggleDrawer = () => {
        navigation.openDrawer();
    };
    const searchDestination = () =>
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: Screens.INTERESTED_PLACE,
        });

    return (
        <SafeAreaView>
            <RoundedSearchBar
                icon={<LocationIcon />}
                onPress={searchDestination}
                placeholderText="Search Your Destination"
                autoFocus={false}
            />
            <View style={styles.contentBox}>
                <InterestedPlaces />
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
