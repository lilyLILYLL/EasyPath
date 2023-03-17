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

import React, { useState, useRef } from "react";
import { HeadBar } from "../components/HeadBar";
import { LoginForm } from "../components/LoginForm";
import colors from "../constants/colors";
import { ButtonForm } from "../components/ButtonForm";
import { CheckBoxButton } from "../components/CheckBoxButton";
import { KeyBoardSpacer } from "../components/KeyBoardSpacer";
import { Logo } from "../components/Logo";

export const LoginScreen = ({ navigation }) => {
    const [keyBoardEnabled, setKeyBoardEnabled] = useState(false);

    const scroll_ref = useRef(null);
    const handleContentSizeChange = () => {
        scroll_ref.current.scrollToEnd({ animated: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <HeadBar header="Log In" />
            <ScrollView
                style={styles.contentContainer}
                ref={scroll_ref}
                onContentSizeChange={handleContentSizeChange}
            >
                <View>
                    <Logo size={1 / 3} />
                    <View style={styles.appName}>
                        <Text style={styles.name}>Easy Path</Text>
                    </View>
                    <View style={styles.underline} />
                    <View style={styles.underline} />
                </View>

                <LoginForm />

                <CheckBoxButton text="Remember me" />
                <ButtonForm
                    buttonText="Log In"
                    toggle={true}
                    onPress={() => {
                        navigation.push("DrawerNavigator");
                    }}
                />
                <ButtonForm
                    buttonText="Login as Guest"
                    toggle={false}
                    onPress={() => {
                        navigation.push("DrawerNavigator");
                    }}
                />
                <KeyBoardSpacer
                    onToggle={(keyBoardEnabled) => {
                        setKeyBoardEnabled(keyBoardEnabled);
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: colors.mainBackgroundColor, flex: 1 },
    contentContainer: {
        marginLeft: 10,
        height: 700,
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
