import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { SearchBar } from "../components/SearchBar";
import colors from "../constants/colors";
import buildings from "../constants/buildings";
import { Ionicons } from "@expo/vector-icons";
import { SuggestionRow } from "../components/SuggestionRow";
import { StatusBar } from "expo-status-bar";
import { LocationContext } from "../contexts/LocationContext";

export const SearchSuggestionScreen = ({ navigation, route }) => {
    const { chooseStartPoint, chooseDestination } = useContext(LocationContext);
    const placeholderText = route.params.placeholderText;

    const handle = (location) => {
        console.log("something");
        if (route.params.title === "destination") {
            chooseDestination(location);
        } else {
            chooseStartPoint(location);
        }
        navigation.navigate("MapScreen");
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
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
