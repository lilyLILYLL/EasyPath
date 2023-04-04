import React, { createContext, useReducer, useEffect } from "react";
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
            };
        case "is_loading": {
            return { ...state, isLoading: true };
        }
        case "stop_loading":
            return { ...state, isLoading: false };
        case "log_out":
            return {
                ...state,
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
        case "toggle_rememberMe":
            return { ...state, rememberMe: action.payload };
        case "auto_fill":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
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
        rememberMe: true,
    });
    console.log(state);

    useEffect(() => {
        getRememberUser();
    }, []);

    const login = async (email, password) => {
        dispatch({ type: "is_loading" });
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                // setItem for auto local signinh
                await AsyncStorage.setItem("email", email);
                await AsyncStorage.setItem("password", password);

                // update state
                dispatch({
                    type: "log_in",
                    payload: { email, password },
                });

                //rememberUse
                if (state.rememberMe) {
                    rememberUser(email, password);
                } else {
                    forgetUser();
                }

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
            await AsyncStorage.removeItem("email");
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
        } else {
            RootNavigation.navigate(Screens.LOGIN);
        }
    };

    const rememberUser = async (email, password) => {
        try {
            await AsyncStorage.setItem("YOUR-EMAIL", email);
            await AsyncStorage.setItem("YOUR-PASSWORD", password);
        } catch (err) {
            console.log(err.message);
            throw new Error(err.message);
        }
    };

    const getRememberUser = async () => {
        try {
            const email = await AsyncStorage.getItem("YOUR-EMAIL");
            const password = await AsyncStorage.getItem("YOUR-PASSWORD");
            console.log(email);
            console.log(password);
            if (!email) {
                dispatch({ type: "toggle_rememberMe", payload: false });
            }
            if (email && password) {
                dispatch({ type: "auto_fill", payload: { email, password } });
            }
        } catch (err) {
            console.log(err.message);
            throw new Error(err.message);
        }
    };

    const forgetUser = async () => {
        try {
            await AsyncStorage.removeItem("YOUR-EMAIL");
            await AsyncStorage.removeItem("YOUR-PASSWORD");
            dispatch({ type: "toggle_rememberMe", payload: false });
        } catch (err) {
            console.log(err.message);
            throw new Error(err.message);
        }
    };

    const toggleRememberMe = (value) => {
        dispatch({ type: "toggle_rememberMe", payload: value });
    };

    const authContextValue = {
        login,
        logout,
        state,
        tryLocalSignin,
        rememberUser,
        getRememberUser,
        forgetUser,
        toggleRememberMe,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
