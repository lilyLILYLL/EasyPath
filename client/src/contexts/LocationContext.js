import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [startPoint, setStartPoint] = useState("Your Location");
    const [destination, setDestination] = useState("");

    const chooseStartPoint = (location) => {
        setStartPoint(location);
    };

    const chooseDestination = (location) => {
        setDestination(location);
    };

    const locationContextValue = {
        startPoint,
        destination,
        chooseDestination,
        chooseStartPoint,
    };
    return (
        <LocationContext.Provider value={locationContextValue}>
            {children}
        </LocationContext.Provider>
    );
};

const styles = StyleSheet.create({});
