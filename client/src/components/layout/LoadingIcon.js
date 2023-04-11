import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";
export const LoadingIcon = () => {
    return <ActivityIndicator size="large" color={colors.blue} />;
};
const styles = StyleSheet.create({
    loading_icon: {
        alignSelf: "center",
        marginTop: 50,
    },
});
