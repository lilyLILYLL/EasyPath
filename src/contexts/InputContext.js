import React, { createContext } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
    return <InputContext.Provider value={5}>{children}</InputContext.Provider>;
};
