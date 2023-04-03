import { View, Text } from "react-native";
import React, { createContext, useReducer } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as RootNavigation from "../navigations/RootNavigation";
import Screens from "../constants/Screens";

export const AuthContext = createContext();

//state:{email, password}
// action:{type:"login" , payload:{email, password}}
const reducer = (state, action) => {
    switch (action.type) {
        case "log_in":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                errorMessage: action.payload.errorMessager,
                isLoading: action.payload.isLoading,
            };
        case "error":
            return { ...state, errorMessage: action.payload, isLoading: true };
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
            .then((res) => {
                console.log(res);
                dispatch({
                    type: "log_in",
                    payload: {
                        email,
                        password,
                        errorMessage: "",
                        isLoading: true,
                    },
                });
                RootNavigation.navigate(Screens.DRAWER_NAVIGATOR);
            })
            .catch((error) => {
                const error_code = error.code;
                console.log(error_code);
                if (error_code === "auth/invalid-email") {
                    dispatch({
                        type: "error",
                        payload: "Valid Email Required!",
                    });
                }
                if (error_code === "auth/user-not-found") {
                    dispatch({
                        type: "error",
                        payload: "Email is NOT Found!",
                    });
                }
                if (error_code === "auth/wrong-password") {
                    dispatch({
                        type: "error",
                        payload: "Password is NOT Correct!",
                    });
                }
            })
            .finally(() => {
                dispatch({ type: "stop_loading" });
            });
    };
    const logout = async () => {
        try {
            await auth.signOut();
            dispatch({ type: "log_out" });
            console.log("log out");
            RootNavigation.navigate(Screens.LOGIN);
        } catch (error) {
            console.log(error);
        }
    };
    const authContextValue = { login, logout, state };
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
