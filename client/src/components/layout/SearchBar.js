import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../../constants/colors";

export const SearchBar = ({
    onPress,
    isInputFocused,
    goBack,
    placeholderText,
    value,
}) => {
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
            ) : (
                <Ionicons name="location" size={35} color={colors.blue} />
            )}

            <TextInput
                placeholder={placeholderText}
                style={styles.text}
                onFocus={onPress}
                autoFocus={isInputFocused}
                value={value}
            />
            <AntDesign name="search1" color={colors.blue} size={25} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: colors.white,
        marginTop: 15,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: colors.blue,
        marginLeft: 20,
        flex: 1,
    },
});
