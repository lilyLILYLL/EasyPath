import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GoBackIcon } from "../components/layout/Icons";
import { MapScreenIcon } from "../components/layout/Icons";
import { SwapIconVertical } from "../components/layout/Icons";
import { SquaredSearchBar } from "../components/layout/SquaredSearchBar";
import Screens from "../constants/Screens";
import { LocationContext } from "../contexts/LocationContext";
import colors from "../constants/colors";
export const MapSearchBox = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params;
    console.log(params);

    const { startPoint, destination, chooseDestination, chooseStartPoint } =
        useContext(LocationContext);

    const searchStartPoint = () => {
        navigation.navigate(Screens.SUGGESTION, {
            placeholderText: "Choose Start Point",
            title: "startPoint",
            goBackTo: params.goBackTo,
        });
    };

    const searchDestination = () => {
        navigation.navigate(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: params.goBackTo,
        });
    };

    return (
        <View style={styles.searchBox}>
            <GoBackIcon
                onPress={() => {
                    chooseStartPoint("Your Location");
                    chooseDestination("");
                    navigation.navigate(params.goBackTo);
                }}
            />
            <MapScreenIcon />

            <View style={styles.searchInput}>
                <SquaredSearchBar
                    onPress={searchStartPoint}
                    searchValue={startPoint}
                />
                <SquaredSearchBar
                    onPress={searchDestination}
                    searchValue={destination}
                />
            </View>

            <View style={styles.swapIcon}>
                <SwapIconVertical />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: "row",
        marginLeft: 5,
        marginTop: 15,
    },
    searchInput: {
        width: "65%",
        marginLeft: 15,
        marginRight: 5,
    },
    swapIcon: {
        alignSelf: "center",
    },
    inputText: {
        fontSize: 16,
        color: colors.blue,
    },
});
