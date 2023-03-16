import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const MapScreen = () => {
    return (
        <View>
            <Text style={styles.map}>Here is a Map</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 200,
    },
});
