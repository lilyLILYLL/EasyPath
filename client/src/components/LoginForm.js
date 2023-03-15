import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const screen = Dimensions.get("window");

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [securePassword, setSecurePassword] = useState(true);
    const password_ref = useRef();
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
        marginTop: 10,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
