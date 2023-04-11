import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { Logo } from "../components/layout/Logo";
import { AuthContext } from "../contexts/AuthContext";
import { LoadingIcon } from "../components/layout/LoadingIcon";
import colors from "../constants/colors";

export const LoadingScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { tryLocalSignin } = useContext(AuthContext);

    const handleLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
            tryLocalSignin();
        }, 1000);
    };

    useEffect(() => {
        handleLoading();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarForm />
            <View style={styles.logo}>
                <Logo size={1 / 1.5} color="white" />
            </View>
            {isLoading ? <LoadingIcon /> : null}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    logo: {
        marginLeft: 50,
        marginTop: 100,
        marginBottom: 30,
    },
});
