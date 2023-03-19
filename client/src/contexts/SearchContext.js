import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

const DUMMY_DATE = "10/10/2023";
const DUMMY_TIME = 6;

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
    const [recentSearch, setRecentSearch] = useState([]);
    console.log(recentSearch);
    const addSearch = ({ startPoint, destination }) => {
        setRecentSearch([
            {
                from: startPoint,
                to: destination,
                date: DUMMY_DATE,
                time: DUMMY_TIME,
            },
            ...recentSearch,
        ]);
    };

    const contextValue = { recentSearch, addSearch };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

const styles = StyleSheet.create({});
