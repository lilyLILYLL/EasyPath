import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { LoginForm } from "../components/LoginForm";
import { GoBackIcon } from "../components/layout/Icons";
import { ButtonForm } from "../components/layout/ButtonForm";
import { AuthContext } from "../contexts/AuthContext";
import Screens from "../constants/Screens";

export const LoginScreen = ({ navigation }) => {
    const { state, login } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headBar}>
                <TouchableOpacity>
                    <GoBackIcon
                        onPress={() => navigation.navigate(Screens.AUTH)}
                    />
                </TouchableOpacity>

                <View style={styles.headerText}>
                    <Text style={styles.login}>Log In</Text>
                    <Text style={styles.details}>
                        Enter your login details to continue
                    </Text>
                </View>
            </View>
            <LoginForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { marginHorizontal: 20 },
    headBar: {
        flexDirection: "row",
    },
    headerText: {
        flex: 1,
        justifyContent: "center",
        marginRight: 70,
        marginLeft: 50,
        marginBottom: 20,
    },
    login: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "center",
        marginVertical: 10,
    },
    details: {
        alignSelf: "center",
        fontSize: 16,
        textAlign: "center",
    },
});
