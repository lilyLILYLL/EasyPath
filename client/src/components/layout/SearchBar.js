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
    isInputFocused, //check
    goBack,
    placeholderText,
    searchValue,
    icon,
    size,
}) => {
    return (
        <SafeAreaView
            style={
                size !== "large"
                    ? styles.searchBar
                    : [styles.searchBar, { height: 60, borderRadius: 30 }]
            }
        >
            {/* {isInputFocused ? ( // icon="goBack"
                <TouchableOpacity>
                    <Entypo
                        name="chevron-thin-left"
                        size={30}
                        onPress={goBack}
                    />
                </TouchableOpacity>
            ) : icon === null ? null : (
                <Ionicons name="location" size={35} color={colors.blue} />
            )} */}
            {icon}
            <TextInput
                placeholder={placeholderText}
                placeholderTextColor={colors.placeholderColor}
                style={
                    size !== "large"
                        ? styles.text
                        : [styles.text, { fontSize: 20 }]
                }
                onFocus={onPress}
                autoFocus={isInputFocused}
                value={searchValue}
            />
            <AntDesign name="search1" color={colors.blue} size={""} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: colors.white,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: 1,
        //shadow
        borderColor: colors.lightgray,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Set elevation to make it work on Android
        height: 45,
    },
    text: {
        fontSize: 17,
        color: colors.blue,
        marginLeft: 20,
        flex: 1,
    },
});
