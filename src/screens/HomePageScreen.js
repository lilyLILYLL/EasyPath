import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    View,
    Dimensions,
} from "react-native";

import React from "react";
import { HeadBar } from "../components/HeadBar";
import { LoginForm } from "../components/LoginForm";
import colors from "../constants/colors";
import { ButtonForm } from "../components/ButtonForm";
import { CheckBoxButton } from "../components/CheckBoxButton";

//The size of the logo: 1417 × 1166 pixels
const screen = Dimensions.get("window");
const radio = screen.width / 1417;

export const HomePageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <HeadBar header="Log In" />
            <ScrollView style={styles.contentContainer}>
                <View>
                    <Image
                        source={require("../assets/UOWLogos/UOW_Primary_RGB_Black.png")}
                        style={styles.logo}
                    />
                    <View style={styles.appName}>
                        <Text style={styles.name}>Easy Path</Text>
                    </View>
                    <View style={styles.underline} />
                    <View style={styles.underline} />
                </View>

                <LoginForm />

                <CheckBoxButton text="Remember me" />
                <ButtonForm buttonText="Log In" toggle={true} />
                <ButtonForm buttonText="Login as Guest" toggle={false} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: colors.mainBackgroundColor },
    contentContainer: {
        marginLeft: 10,
        height: 700,
    },
    logo: {
        marginTop: 20,
        marginBottom: 10,
        width: screen.width / 3,
        height: (1166 * radio) / 3,
        alignSelf: "center",
    },
    appName: {
        backgroundColor: colors.blue,
        height: 100,
        marginHorizontal: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    name: {
        color: colors.white,
        fontSize: 30,
    },
    underline: {
        borderWidth: 0.8,
        borderBottomColor: colors.blue,
        marginTop: 10,
        width: 210,
        alignSelf: "center",
        backgroundColor: colors.blue,
    },
});
