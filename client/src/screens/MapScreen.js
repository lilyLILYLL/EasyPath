import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { SearchContext } from "../contexts/SearchContext";
import { SearchBar } from "../components/layout/SearchBar";
import { LocationContext } from "../contexts/LocationContext";
import { FontAwesome, Octicons, Entypo, Ionicons } from "@expo/vector-icons";
import moment from "moment";
import Screens from "../constants/Screens";
import { GoBackIcon } from "../components/layout/Icons";
import { MapScreenIcon } from "../components/layout/Icons";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { SwapIconVertical } from "../components/layout/Icons";
const DUMMY_TIME = 6;

export const MapScreen = ({ navigation, route }) => {
    const { startPoint, destination, chooseDestination, chooseStartPoint } =
        useContext(LocationContext);
    const { addRecentSearch } = useContext(SearchContext);
    const currentDate = moment().format("DD/MM/YYYY");

    const params = route.params;

    const searchStartPoint = () => {
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Start Point",
            title: "startPoint",
            goBackTo: params.goBackTo,
        });
    };
    const searchDestination = () => {
        navigation.push(Screens.SUGGESTION, {
            placeholderText: "Choose Destination",
            title: "destination",
            goBackTo: params.goBackTo,
        });
    };

    const search = (startPoint, destination) => {
        addRecentSearch(startPoint, destination, currentDate, DUMMY_TIME);
        // map show up
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarForm />

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
                    <SearchBar
                        placeholderText="Choose Start Point"
                        onPress={searchStartPoint}
                        searchValue={startPoint}
                        icon={null}
                    />
                    <SearchBar
                        placeholderText="Choose Destination"
                        onPress={searchDestination}
                        searchValue={destination}
                        icon={null}
                    />
                </View>
                <View style={styles.swapIcon}>
                    <SwapIconVertical />
                </View>
            </View>

            <TouchableOpacity onPress={() => search(startPoint, destination)}>
                <View style={styles.startButton}>
                    <FontAwesome
                        name="location-arrow"
                        size={20}
                        color={colors.white}
                    />
                    <Text style={styles.buttonText}>Start</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.mapView}>
                {startPoint && destination ? (
                    <>
                        <Text style={styles.text}> From : {startPoint}</Text>
                        <Text style={styles.text}> To : {destination}</Text>
                    </>
                ) : (
                    <Text style={styles.text}> Map View here</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.blue,
        borderRightWidth: 1,
    },
    inputText: {
        fontSize: 16,
        color: colors.blue,
    },
    mapView: {
        height: 600,
        borderRadius: 10,
    },
    mapText: {
        fontWeight: "bold",
        fontSize: 40,
    },
    startButton: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginHorizontal: 150,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: colors.blue,
        justifyContent: "center",
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 100,
        fontSize: 30,
    },

    searchBox: {
        flexDirection: "row",
        marginLeft: 5,
        marginVertical: 15,
    },
    searchInput: {
        width: "65%",
        marginLeft: 15,
        marginRight: 5,
    },
    swapIcon: {
        alignSelf: "center",
    },
});
