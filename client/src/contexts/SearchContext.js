import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
    const [recentSearch, setRecentSearch] = useState([]);

    const addRecentSearch = (from, to, date, time) => {
        const user = getAuth().currentUser;
        if (user) {
            const db = getDatabase();
            const id = user.uid;
            const searchListRef = ref(db, id);
            console.log(searchListRef);
            const newSeacrRef = push(searchListRef);
            set(newSeacrRef, {
                from: from,
                to: to,
                date: date,
                time: time,
            });
        }
    };
    const fetch = () => {
        const db = getDatabase();
        const user = getAuth().currentUser;
        const id = user.uid;
        const searchListRef = ref(db, id);
        // fetch database here and setRecentSearches here
    };

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

    const contextValue = { recentSearch, addRecentSearch, fetch };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

const styles = StyleSheet.create({});
