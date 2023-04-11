import CheckBox from "expo-checkbox";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import colors from "../constants/colors";
import { AuthContext } from "../contexts/AuthContext";

export const CheckBoxButton = ({ text }) => {
    const { state, toggleRememberMe } = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={() => toggleRememberMe(!state.rememberMe)}>
            <View style={styles.checkbox}>
                <CheckBox
                    value={state.rememberMe}
                    onValueChange={(value) => toggleRememberMe(value)}
                    color={state.rememberMe ? colors.blue : undefined}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: "row",
        marginLeft: 20,
        marginVertical: 15,
        marginBottom: 20,
    },
    text: {
        marginLeft: 20,
        fontSize: 16,
        color: colors.blue,
    },
});
