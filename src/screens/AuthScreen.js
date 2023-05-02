import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import React, { useRef, useState, useContext } from "react";
import colors from "../constants/colors";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { ButtonForm } from "../components/layout/ButtonForm";
import Screens from "../constants/Screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const AuthScreen = ({ navigation }) => {
    const [keyBoardEnabled, setKeyBoardEnabled] = useState(false);

    const scroll_ref = useRef(null);

    const handleContentSizeChange = () => {
        scroll_ref.current.scrollToEnd({ animated: true });
    };
    const hideKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <SafeAreaView style={styles.container}>
                <StatusBarForm />

                {/* App Name and title */}
                <MaterialCommunityIcons
                    name="map-marker-radius"
                    size={200}
                    color={colors.blue}
                    style={styles.mapLogo}
                />
                <View style={styles.name_title}>
                    <Text style={styles.name}>Easy Path</Text>
                    <Text style={styles.title}>
                        Make it easier and quicker to reach your destination.
                    </Text>
                </View>
                {/* Buttons */}
                <View style={styles.button}>
                    <ButtonForm
                        buttonText="Log In"
                        onPress={() => {
                            navigation.navigate(Screens.LOGIN);
                        }}
                    />
                    <ButtonForm
                        buttonText="Login as Guest"
                        onPress={() => {
                            navigation.navigate(Screens.MAP, {
                                goBackTo: Screens.AUTH,
                            });
                        }}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainBackgroundColor,
        flex: 1,
        marginLeft: 10,
    },

    mapLogo: {
        alignSelf: "center",
        marginTop: 100,
    },
    name_title: {
        marginTop: 50,
        marginBottom: 100,
    },
    name: {
        color: colors.blue,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },

    header: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginHorizontal: 40,
        marginTop: 5,
    },
});
