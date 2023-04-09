import { View, Text } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
export const MenuIcon = () => {
    return <Entypo name="menu" size={35} color={colors.white} />;
};

export const GoBackIcon = () => {
    return <Ionicons name="md-chevron-back" color={colors.white} size={35} />;
};
