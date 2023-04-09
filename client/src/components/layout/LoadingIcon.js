import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";
export const LoadingIcon = () => {
    return (
        <View>
            <ActivityIndicator
                size="large"
                color={colors.blue}
                style={styles.loading_icon}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    loading_icon: {
        alignSelf: "center",
        marginTop: 50,
    },
});
