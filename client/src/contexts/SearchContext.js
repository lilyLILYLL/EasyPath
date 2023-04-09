import { StyleSheet } from "react-native";
import React, { createContext, useReducer } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = (state, action) => {
    switch (action.type) {
        case "fetch":
            return { ...state, recentSearch: action.payload, isLoading: false };
        case "add":
            return {
                ...state,
                recentSearch: [action.payload, ...state.recentSearch],
            };
        case "is_loading":
            return { ...state, isLoading: true };
        case "stop_loading":
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        recentSearch: [],
        isLoading: false,
    });

    // adding a new recent search into database
    const addRecentSearch = async (from, to, date, time) => {
        // add a new search into database
        const db = getDatabase();
        const id = await AsyncStorage.getItem("token");
        if (id) {
            const searchListRef = ref(db, id);
            const newSeacrRef = push(searchListRef);
            set(newSeacrRef, {
                from: from,
                to: to,
                date: date,
                time: time,
            });
        }
        // update recent search state
        dispatch({ type: "add", payload: { id: id, from, to, date, time } });
    };

    // fetch database
    const fetch = async () => {
        dispatch({ type: "is_loading" });
        const db = getDatabase();
        const id = await AsyncStorage.getItem("token");
        if (id) {
            const searchListRef = ref(db, id);
            // fetch database here and setRecentSearches here
            onValue(searchListRef, (snapshot) => {
                const data = snapshot.val();
                var dataArray = Object.keys(data).map((id) => {
                    return {
                        id: id,
                        from: data[id].from,
                        to: data[id].to,
                        date: data[id].date,
                        time: data[id].time,
                    };
                });

                dispatch({ type: "fetch", payload: dataArray.reverse() });
            });
        }
    };

    const contextValue = {
        state,
        addRecentSearch,
        fetch,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

const styles = StyleSheet.create({});
