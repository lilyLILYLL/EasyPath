import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";

export const HeadBar = ({ header, onPress }) => {
    return (
        <View style={styles.barContainer}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Entypo
                        name="menu"
                        size={30}
                        color={colors.white}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={styles.header}>{header}</Text>
            </View>
            <View style={styles.subContainer}>
                <TouchableOpacity>
                    <AntDesign
                        name="search1"
                        size={27}
                        color={colors.white}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo
                        name="dots-three-vertical"
                        size={27}
                        color={colors.white}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        backgroundColor: colors.blue,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    header: {
        color: colors.white,
        fontSize: 26,
    },
    icon: { marginRight: 22 },
});
