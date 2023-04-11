import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";

const screen = Dimensions.get("window");
export const ButtonForm = ({ buttonText, toggle, onPress }) => {
    let containerStyle = styles.container;
    let textStyle = styles.text;
    if (!toggle) {
        containerStyle = [containerStyle, { backgroundColor: colors.white }];
        textStyle = [textStyle, { color: colors.blue }];
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={containerStyle}>
                <Text style={textStyle}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: screen.height * 0.08,
        width: screen.width * 0.9,
        backgroundColor: colors.blue,
        marginVertical: 7,
        alignSelf: "center",
        borderRadius: 25,
        alignContent: "center",
        justifyContent: "center",
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Set elevation to make it work on Android
    },
    text: {
        color: colors.white,
        alignSelf: "center",
        fontSize: 22,
    },
});
