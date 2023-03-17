import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";

export const HeadBar = ({ header, onPress }) => {
    return (
        <View style={styles.barContainer}>
            <TouchableOpacity onPress={onPress}>
                <Entypo
                    name="menu"
                    size={35}
                    color={colors.white}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <Text style={styles.header}>{header}</Text>
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
    icon: { marginRight: 50 },
});
