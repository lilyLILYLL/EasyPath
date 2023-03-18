import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const SuggestionRow = ({ name }) => {
    return (
        <TouchableOpacity>
            <View style={styles.row}>
                <EvilIcons name="search" size={25} />
                <Text style={styles.rowText}>{name}</Text>
                <MaterialCommunityIcons name="arrow-top-left" size={25} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        padding: 15,
        borderBottomColor: colors.blue,
        borderBottomWidth: 0.3,
        flexDirection: "row",
    },
    rowText: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 180,
    },
});
