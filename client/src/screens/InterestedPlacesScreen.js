import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useContext } from "react";
import { HeadBar } from "../components/layout/HeadBar";
import { SearchBar } from "../components/layout/SearchBar";
import { InterestedPlaces } from "../components/InterestedPlaces";
import { Logo } from "../components/layout/Logo";
import Screens from "../constants/Screens";
import { MenuIcon } from "../components/layout/Icons";
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
            <HeadBar
                header="Places of Interest"
                onPress={toggleDrawer}
                icon={<MenuIcon />}
            />
            <SearchBar
                onPress={searchDestination}
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
