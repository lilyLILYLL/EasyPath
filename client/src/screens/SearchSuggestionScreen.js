import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    Keyboard,
} from "react-native";
import React, { useContext, useState } from "react";
import { SearchBar } from "../components/layout/SearchBar";
import colors from "../constants/colors";
import buildings from "../constants/buildings";
import { SuggestionRow } from "../components/SuggestionRow";

import { LocationContext } from "../contexts/LocationContext";
import Screens from "../constants/Screens";
import { StatusBarForm } from "../components/layout/StatusBarForm";

export const SearchSuggestionScreen = ({ navigation, route }) => {
    const { chooseStartPoint, chooseDestination } = useContext(LocationContext);
    const placeholderText = route.params.placeholderText;
    const goBackToScreen = route.params.goBackTo;

    const handle = (location) => {
        console.log("something");
        if (route.params.title === "destination") {
            chooseDestination(location);
        } else {
            chooseStartPoint(location);
        }
        navigation.navigate(Screens.MAP, { goBackTo: goBackToScreen });
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarForm />
            <SearchBar
                isInputFocused={true}
                goBack={() => navigation.pop()}
                placeholderText={placeholderText}
            />
            <View style={styles.suggestionBox}>
                <Text style={styles.historyText}>SUGGESTIONS</Text>

                <FlatList
                    data={buildings}
                    renderItem={({ item }) => {
                        return (
                            <SuggestionRow
                                name={item}
                                key={item.index}
                                onPress={() => handle(item)}
                            />
                        );
                    }}
                    keyExtractor={(item) => item}
                    keyboardShouldPersistTaps="always"
                    onScroll={() => Keyboard.dismiss()}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    suggestionBox: {
        height: 750,
        marginVertical: 10,
    },

    historyText: { fontSize: 16, fontWeight: "bold", padding: 10 },
});
