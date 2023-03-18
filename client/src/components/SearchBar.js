import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

export const SearchBar = ({ onPress, isInputFocused, goBack }) => {
    return (
        <SafeAreaView style={styles.searchBar}>
            {isInputFocused ? (
                <TouchableOpacity>
                    <Entypo
                        name="chevron-thin-left"
                        size={25}
                        onPress={goBack}
                    />
                </TouchableOpacity>
            ) : null}
            <TextInput
                placeholder="Search UOW Campus"
                style={styles.text}
                onFocus={onPress}
                autoFocus={isInputFocused}
            />
            <AntDesign name="search1" color={colors.blue} size={20} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: colors.white,
        marginTop: 10,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    text: {
        fontSize: 18,
        color: colors.blue,
        marginLeft: 10,
        flex: 1,
    },
});
