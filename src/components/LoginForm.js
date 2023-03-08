import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import colors from "../constants/colors";

const screen = Dimensions.get("window");

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const password_ref = useRef();
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="UOW Email"
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={() => password_ref.current.focus()}
            />
            <TextInput
                ref={password_ref}
                placeholder="Password"
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
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
        padding: 20,
        fontSize: 20,
    },
    inputContainer: {
        marginTop: 40,
        marginBottom: 20,
    },
});
