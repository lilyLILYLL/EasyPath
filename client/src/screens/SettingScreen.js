import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import colors from "../constants/colors";

export const SettingScreen = () => {
    const { logout } = useContext(AuthContext);
    return (
        <TouchableOpacity>
            <SafeAreaView style={styles.button}>
                <Text style={styles.text} onPress={() => logout()}>
                    LOG OUT
                </Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
        height: 70,
        width: 200,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,
    },
});
