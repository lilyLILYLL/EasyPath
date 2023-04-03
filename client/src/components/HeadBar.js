import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";

export const HeadBar = ({ header, onPress, icon }) => {
    return (
        <View style={styles.barContainer}>
            <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
            <View style={styles.headerBox}>
                <Text style={styles.header}>{header}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        backgroundColor: colors.blue,
        padding: 20,
        flexDirection: "row",
        borderRadius: 5,
    },

    header: {
        color: colors.white,
        fontSize: 30,
    },
    headerBox: {
        flex: 1,
        alignItems: "center",
        marginRight: 20,
    },
    icon: {},
});
