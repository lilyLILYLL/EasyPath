import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";

export const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <TextInput placeholder="Search UOW Campus" style={styles.text} />
            <AntDesign name="search1" color={colors.blue} size={20} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: colors.whiteFont,
        marginHorizontal: 20,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: colors.blue,
    },
});
