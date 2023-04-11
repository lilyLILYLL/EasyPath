import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";
import colors from "../../constants/colors";

export const StatusBarForm = () => {
    return (
        <View>
            <StatusBar
                translucent
                barStyle={
                    Platform.OS === "ios" ? "dark-content" : "light-content"
                }
            />
        </View>
    );
};
