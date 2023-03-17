import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../constants/colors";
import interestedPlaces from "../constants/interestedPlaces";

export const InterestedPlaces = () => {
    return (
        <View style={styles.container}>
            {interestedPlaces &&
                interestedPlaces.map(({ icon, location }, index) => {
                    return (
                        <LocationItem
                            icon={icon}
                            locationName={location}
                            key={index}
                        />
                    );
                })}
        </View>
    );
};

const LocationItem = ({ icon, locationName, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.locationItem}>
                <Text style={styles.icon}>{icon}</Text>
                <Text style={styles.locationText}>{locationName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        marginVertical: 10,
        paddingRight: 20,
        paddingTop: 20,
    },
    locationItem: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    locationText: {
        fontSize: 22,
        marginLeft: 20,
        color: colors.blue,
    },
});
