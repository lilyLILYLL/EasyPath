import {
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    View,
} from "react-native";

import React, { useRef, useState, useContext, useEffect } from "react";
import { HeadBar } from "../components/layout/HeadBar";
import { LoginForm } from "../components/LoginForm";
import colors from "../constants/colors";
import { KeyBoardSpacer } from "../components/layout/KeyBoardSpacer";
import { Logo } from "../components/layout/Logo";

export const LoginScreen = ({ navigation }) => {
    const [keyBoardEnabled, setKeyBoardEnabled] = useState(false);

    const scroll_ref = useRef(null);

    const handleContentSizeChange = () => {
        scroll_ref.current.scrollToEnd({ animated: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <HeadBar header="Log In" />
            <ScrollView
                keyboardShouldPersistTaps="always"
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
