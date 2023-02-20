import CheckBox from "expo-checkbox";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";

export const CheckBoxButton = ({ text }) => {
    const [isSelected, setSelection] = useState(true);
    return (
        <TouchableOpacity>
            <View style={styles.checkbox}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={isSelected ? colors.blue : undefined}
                />
                <Text
                    style={styles.text}
                    onPress={() => setSelection(!isSelected)}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 20,
    },
    text: {
        marginLeft: 20,
        fontSize: 16,
        color: colors.blue,
    },
});
