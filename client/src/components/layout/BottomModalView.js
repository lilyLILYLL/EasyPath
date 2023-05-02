import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { RouteContext } from "../../contexts/RouteContext";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

export const BottomModalView = () => {
    const { distance, duration } = useContext(RouteContext);
    let formatedDuration = "";

    const formatDuration = () => {
        if (duration > 60) {
            formatedDuration =
                parseInt(duration / 60).toString() +
                " hr " +
                (duration % 60).toString() +
                " min";
        } else {
            formatedDuration = duration.toString() + "min";
        }
    };

    useEffect(() => {
        formatDuration();
    }, [duration]);

    formatDuration();
    return (
        <View style={styles.container}>
            <View style={styles.routeInfo}>
                <Text style={styles.duration}>{formatedDuration}</Text>
                <Text style={styles.distance}>{`(${distance} km)`}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>GO THERE</Text>
                <FontAwesome
                    name="location-arrow"
                    size={30}
                    color={colors.white}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    routeInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    duration: {
        fontSize: 25,
        fontWeight: "bold",
        marginRight: 20,
    },
    distance: {
        fontSize: 24,
        color: colors.gray,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: colors.blue,
        height: 60,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        marginRight: 20,
        fontWeight: "bold",
    },
});
