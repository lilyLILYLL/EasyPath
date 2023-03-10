import { View, Text } from "react-native";
import React, { createContext, useReducer } from "react";
const account = { email: "jennie", password: "password" };
export const AuthContext = createContext();

//state:{email, password}
// action:{type:"login" , payload:{email, password}}
const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { email: "", password: "" });

    const login = (email, password) => {
        //get data from api
        try {
            
        } catch (err) {}
    };
    const logout = () => {};
    const authContextValue = { login, logout, state };
    return <AuthContext.Provider value={3}>{children}</AuthContext.Provider>;
};
