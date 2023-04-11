import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { ClockIcon } from "./layout/Icons";
import { ForwardIcon } from "./layout/Icons";
export const SuggestionRow = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.row}>
                <ClockIcon />
                <Text style={styles.rowText}>{name}</Text>
                <ForwardIcon />
            </View>
            <View style={styles.separator}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        paddingVertical: 15,
        paddingRight: 15,
        paddingLeft: 10,
        flexDirection: "row",
    },
    separator: {
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1,
        marginLeft: 75,
    },
    rowText: {
        fontSize: 18,
        marginLeft: 30,
        flex: 1,
    },
});
