import { StyleSheet } from "react-native";
import React, { createContext, useReducer, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = (state, action) => {
    switch (action.type) {
        case "fetch":
            return { ...state, recentSearch: action.payload, isLoading: false };

        case "is_loading":
            return { ...state, isLoading: true };
        case "stop_loading":
            return { ...state, isLoading: false };
        case "location_fetch":
            return { ...state, locations: action.payload };
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

    useEffect(() => {
        fetch();
    }, []);

    // adding a new recent search into database
    const addRecentSearch = async (from, to, date, time) => {
        // add a new search into database
        const db = getDatabase();
        const id = await AsyncStorage.getItem("userId");
        // push a new recent search into database
        if (id) {
            const searchListRef = ref(db, "users/" + id);
            const newSeacrRef = push(searchListRef);
            set(newSeacrRef, {
                from: from,
                to: to,
                date: date,
                time: time,
            });
        }
    };

    // fetch database
    const fetch = async () => {
        dispatch({ type: "is_loading" });
        const db = getDatabase();

        // fetch User's searching histoty database
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
            const userRef = ref(db, "users/" + userId);
            // fetch database here and setRecentSearches here
            onValue(userRef, (snapshot) => {
                // database exists
                if (snapshot.size !== 0) {
                    const data = snapshot.val();
                    var dataArray = Object.keys(data).map((userId) => {
                        return {
                            id: userId,
                            from: data[userId].from,
                            to: data[userId].to,
                            date: data[userId].date,
                            time: data[userId].time,
                        };
                    });

                    dispatch({ type: "fetch", payload: dataArray.reverse() });
                } else {
                    dispatch({ type: "fetch", payload: [] });
                }
            });
        } else {
            throw new Error("There is no userId logged in!");
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
