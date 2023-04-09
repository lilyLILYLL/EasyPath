import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { CheckBoxButton } from "../components/CheckBoxButton";
import { AuthContext } from "../contexts/AuthContext";
import Screens from "../constants/Screens";
import { useNavigation } from "@react-navigation/native";
import { LoadingIcon } from "./layout/LoadingIcon";
import { ButtonForm } from "./layout/ButtonForm";

const screen = Dimensions.get("window");

export const LoginForm = () => {
    const navigation = useNavigation();
    const [securePassword, setSecurePassword] = useState(true);
    const password_ref = useRef();

    const { login, state } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(state.email || email);
        setPassword(state.password || password);
    }, []);

    const handleSubmitEmail = () => {
        password_ref.current.focus();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="UOW Email"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => password_ref.current.focus()}
                blurOnSubmit={false}
            />
            <View style={[styles.input, styles.passwordContainer]}>
                <TextInput
                    ref={password_ref}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={securePassword}
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    style={{ fontSize: 20, flex: 1 }}
                    returnKeyType="go"
                    onSubmitEditing={() => login(email, password)}
                    blurOnSubmit={false}
                />
                <TouchableOpacity
                    onPress={() => {
                        setSecurePassword(!securePassword);
                    }}
                >
                    {securePassword ? (
                        <Ionicons
                            name="ios-eye"
                            size={30}
                            color={colors.blue}
                        />
                    ) : (
                        <Ionicons
                            name="ios-eye-off"
                            size={30}
                            color={colors.blue}
                        />
                    )}
                </TouchableOpacity>
            </View>

            <CheckBoxButton text="Remember me" />

            {state.isLoading ? (
                <LoadingIcon />
            ) : state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <ButtonForm
                buttonText={state.isLoading ? "Loading..." : "Log In"}
                toggle={true}
                onPress={() => {
                    login(email, password);
                }}
            />
            <ButtonForm
                buttonText="Login as Guest"
                toggle={false}
                onPress={() => {
                    navigation.navigate(Screens.MAP, {
                        goBackTo: Screens.LOGIN,
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: screen.height * 0.07,
        width: screen.width * 0.9,
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: colors.white,
        padding: 15,
        fontSize: 20,
    },
    inputContainer: {
        marginTop: 50,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    errorMessage: {
        color: colors.red,
        fontSize: 16,
        marginLeft: 20,
    },
});
