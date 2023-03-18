import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import colors from "../constants/colors";
import buildings from "../constants/buildings";
import { Ionicons } from "@expo/vector-icons";
import { SuggestionRow } from "../components/SuggestionRow";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
export const SearchSuggestionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <SearchBar isInputFocused={true} goBack={() => navigation.pop()} />
            <View style={styles.suggestionBox}>
                <Text style={styles.historyText}>SUGGESTIONS</Text>

                <FlatList
                    data={buildings}
                    renderItem={({ item }) => {
                        return <SuggestionRow name={item} key={item.index} />;
                    }}
                    keyExtractor={(item) => item}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    suggestionBox: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 15,
        padding: 10,
    },

    historyText: { fontSize: 16, fontWeight: "bold", padding: 10 },
});
