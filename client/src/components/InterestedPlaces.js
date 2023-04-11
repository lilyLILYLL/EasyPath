import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from "react-native";
import React, { useContext } from "react";

import colors from "../constants/colors";
import interestedPlaces from "../constants/interestedPlaces";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "../contexts/LocationContext";
import { ForwardIcon } from "./layout/Icons";
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
        <ScrollView style={styles.container}>
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
        </ScrollView>
    );
};

const LocationItem = ({ icon, locationName, onChooseDestination }) => {
    return (
        <TouchableOpacity onPress={() => onChooseDestination(locationName)}>
            <View style={styles.locationItem}>
                <View style={styles.icon}>
                    <Text style={styles.icon}>{icon}</Text>
                </View>
                <View style={styles.location}>
                    <Text style={styles.locationText}>{locationName}</Text>
                    <Text style={styles.text}> Open: 9am - 5pm</Text>
                </View>
                <ForwardIcon style={styles.forward} />
            </View>
            <View style={styles.separator}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        height: 680,
        marginBottom: 20,
        paddingRight: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    locationItem: {
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
    },
    locationText: {
        fontSize: 22,
        color: colors.blue,
        marginBottom: 3,
        marginLeft: 4,
    },
    location: {
        width: 230,
    },
    text: {
        fontSize: 14,
        color: colors.blue,
    },
    separator: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 0.5,
        marginHorizontal: 10,
    },
    icon: {
        width: 70,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft: 2,
    },
    forward: {
        alignSelf: "flex-end",
    },
});
