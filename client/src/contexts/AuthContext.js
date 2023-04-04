import React, { createContext, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as RootNavigation from "../navigations/RootNavigation";
import Screens from "../constants/Screens";

export const AuthContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "log_in":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                errorMessage: "",
                isLoading: action.payload.isLoading,
            };
        case "stop_loading":
            return { ...state, isLoading: false };
        case "log_out":
            return {
                email: "",
                password: "",
                errorMessage: "",
                isLoading: false,
            };
        case "auth/invalid-email":
            return { ...state, errorMessage: "Valid Email Required!" };
        case "auth/wrong-password":
            return { ...state, errorMessage: "Password is NOT Correct!" };
        case "auth/user-not-found":
            return { ...state, errorMessage: "Email is NOT Found!" };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        email: "",
        password: "",
        errorMessage: "",
        isLoading: false,
    });

    console.log(state);

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                await AsyncStorage.setItem("email", email);
                await AsyncStorage.setItem("password", password);
                dispatch({
                    type: "log_in",
                    payload: { email, password, isLoading: true },
                });
                RootNavigation.navigate(Screens.DRAWER_NAVIGATOR);
            })
            .catch((error) => {
                const error_code = error.code;
                dispatch({ type: error_code });
            })
            .finally(() => {
                console.log("stop_loading");
                dispatch({ type: "stop_loading" });
            });
    };

    const logout = async () => {
        try {
            await auth.signOut();
            await AsyncStorage.clear();
            dispatch({ type: "log_out" });
            RootNavigation.navigate(Screens.LOGIN);
        } catch (error) {
            console.log(error.message);
        }
    };

    const tryLocalSignin = async () => {
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");

        if (email && password) {
            dispatch({
                type: "log_in",
                payload: { email, password, isLoading: false },
            });
            RootNavigation.navigate(Screens.DRAWER_NAVIGATOR);
        }
    };

    const authContextValue = { login, logout, state, tryLocalSignin };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
