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
                onSubmitEditing={handleSubmitEmail}
                blurOnSubmit={false}
                autoFocus={true}
            />
            <View style={[styles.input, styles.passwordContainer]}>
                <TextInput
                    style={{ fontSize: 20, flex: 1 }}
                    ref={password_ref}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={securePassword}
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
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

            <View style={styles.loading}>
                {state.isLoading ? (
                    <View style={styles.loadingBox}>
                        <LoadingIcon />
                    </View>
                ) : state.errorMessage ? (
                    <View style={styles.textBox}>
                        <Text style={styles.errorMessage}>
                            {state.errorMessage}
                        </Text>
                    </View>
                ) : null}
            </View>

            <ButtonForm
                buttonText={"Log In"}
                onPress={() => {
                    login(email, password);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: screen.height * 0.08,
        width: screen.width * 0.9,
        marginTop: 15,
        alignSelf: "center",
        borderRadius: 25,
        backgroundColor: colors.whiteFont,
        padding: 15,
        fontSize: 20,
        paddingLeft: 30,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Set elevation to make it work on Android
    },
    inputContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    errorMessage: {
        color: colors.red,
        fontSize: 16,
        marginLeft: 15,
    },
    textBox: {
        marginTop: 10,
    },
    loadingBox: {
        marginBottom: 10,
    },
    loading: {
        height: 40,
    },
});
