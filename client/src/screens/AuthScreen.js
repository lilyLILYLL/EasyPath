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
import { KeyBoardSpacer } from "../components/layout/KeyBoardSpacer";
import { Logo } from "../components/layout/Logo";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { ButtonForm } from "../components/layout/ButtonForm";
import Screens from "../constants/Screens";

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
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={styles.contentContainer}
                    ref={scroll_ref}
                    onContentSizeChange={handleContentSizeChange}
                >
                    <View>
                        <Logo size={1 / 2} />
                        <View style={styles.appName}>
                            <Text style={styles.name}>Easy Path</Text>
                        </View>
                        <View style={styles.underline} />
                        <View style={styles.underline} />
                    </View>

                    {/* <LoginForm /> */}
                    <View style={styles.button}>
                        <ButtonForm
                            buttonText="Log in"
                            toggle={true}
                            onPress={() => {
                                navigation.navigate(Screens.LOGIN);
                            }}
                        />
                        <ButtonForm
                            buttonText="Login as Guest"
                            toggle={false}
                            onPress={() => {
                                navigation.navigate(Screens.MAP, {
                                    goBackTo: Screens.AUTH,
                                });
                            }}
                        />
                    </View>

                    <KeyBoardSpacer
                        onToggle={(keyBoardEnabled) => {
                            setKeyBoardEnabled(keyBoardEnabled);
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainBackgroundColor,
        flex: 1,
    },
    contentContainer: {
        marginLeft: 10,
        height: 700,
        marginTop: 30,
    },

    appName: {
        backgroundColor: colors.blue,
        height: 100,
        marginHorizontal: 90,
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
        width: 240,
        alignSelf: "center",
        backgroundColor: colors.blue,
    },
    button: {
        marginTop: 220,
    },
});
