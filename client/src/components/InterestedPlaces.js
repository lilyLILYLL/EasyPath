import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import colors from "../constants/colors";
import interestedPlaces from "../constants/interestedPlaces";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "../contexts/LocationContext";
import Screens from "../constants/Screens";

export const InterestedPlaces = () => {
    const navigation = useNavigation();
    const { chooseDestination } = useContext(LocationContext);

    const onChooseDestination = (locationName) => {
        chooseDestination(locationName);
        navigation.navigate(Screens.MAP, {
            goBackTo: Screens.INTERESTED_PLACE,
        });
    };
    return (
        <View style={styles.container}>
            {interestedPlaces &&
                interestedPlaces.map(({ icon, location }, index) => {
                    return (
                        <LocationItem
                            icon={icon}
                            locationName={location}
                            onChooseDestination={onChooseDestination}
                            key={index}
                        />
                    );
                })}
        </View>
    );
};

const LocationItem = ({ icon, locationName, onChooseDestination }) => {
    return (
        <TouchableOpacity onPress={() => onChooseDestination(locationName)}>
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
