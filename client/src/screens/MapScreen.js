import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState, useRef, useContext } from "react";
import { HeadBar } from "../components/HeadBar";
import colors from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import { SearchContext } from "../contexts/SearchContext";

export const MapScreen = ({ navigation }) => {
    const [startLocation, setStartLocation] = useState("");
    const [destination, setDestination] = useState("");
    const destination_ref = useRef(null);

    const { addSearch, recentSearch } = useContext(SearchContext);
    const search = (start, destination) => {
        // update the context of recent searches
        addSearch(startLocation, destination);

        // showing on the map (i'll add it up later because we haven't had a map yet.)

        // Set value back to ""
        setStartLocation("");
        setDestination("");
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <HeadBar
                header="Search"
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
            <View style={styles.contentBox}>
                <View style={styles.inputBox}>
                    <View style={styles.labelBox}>
                        <Text style={styles.label}> Start </Text>
                    </View>
                    <TextInput
                        placeholder="Enter your start location"
                        style={styles.inputText}
                        value={startLocation}
                        onChangeText={(text) => setStartLocation(text)}
                        onSubmitEditing={() => destination_ref.current.focus()}
                    />
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.labelBox}>
                        <Text style={styles.label}> Destination </Text>
                    </View>

                    <TextInput
                        ref={destination_ref}
                        placeholder="Enter your destination"
                        style={styles.inputText}
                        value={destination}
                        onChangeText={(text) => setDestination(text)}
                        onSubmitEditing={() => {
                            search(startLocation, destination);
                            navigation.navigate("WelcomeScreen");
                        }}
                    />
                </View>
                <View style={styles.mapView}>
                    <Text style={styles.mapText}>Here is Map View</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: colors.white,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        borderRadius: 10,
    },
    labelBox: {
        borderRightColor: colors.blue,
        borderRightWidth: 0.7,
        width: 100,
        marginRight: 10,
    },
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
        justifyContent: "center",
        alignItems: "center",
    },
    mapText: {
        fontWeight: "bold",
        fontSize: 40,
    },
});
