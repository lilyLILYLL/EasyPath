import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

export const StatusBarForm = () => {
    return (
        <View>
            <StatusBar
                barStyle={
                    Platform.OS === "ios" ? "dark-content" : "light-content"
                }
            />
        </View>
    );
};
