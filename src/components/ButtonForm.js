import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../constants/colors";

const screen = Dimensions.get("window");
export const ButtonForm = ({ buttonText, toggle }) => {
    let containerStyle = styles.container;
    let textStyle = styles.text;
    if (!toggle) {
        containerStyle = [containerStyle, { backgroundColor: colors.white }];
        textStyle = [textStyle, { color: colors.blue }];
    }
    return (
        <TouchableOpacity>
            <View style={containerStyle}>
                <Text style={textStyle}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: screen.height * 0.07,
        width: screen.width * 0.9,
        backgroundColor: colors.blue,
        marginVertical: 10,
        alignSelf: "center",
        borderRadius: 5,
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.white,
        alignSelf: "center",
        fontSize: 20,
    },
});
