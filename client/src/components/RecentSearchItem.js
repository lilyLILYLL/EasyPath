import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
export const RecentSearchItem = ({
    startLocation,
    destination,
    date,
    time,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <SimpleLineIcons name="clock" size={40} color={colors.red} />
                <View style={styles.content}>
                    <Text style={styles.text}>From:</Text>
                    <Text style={styles.text}>To:</Text>
                    <Text style={styles.text}>Date: </Text>
                    <Text style={styles.text}>Time: </Text>
                </View>
                <View>
                    <Text style={styles.text}>{startLocation}</Text>
                    <Text style={styles.text}>{destination}</Text>
                    <Text style={styles.text}>{date}</Text>
                    <Text style={styles.text}>{time} Minute Walk</Text>
                </View>
            </View>
            <View style={styles.seperator}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    seperator: {
        borderBottomColor: colors.blue,
        borderBottomWidth: 0.5,
    },
    row: {
        marginVertical: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    content: {
        marginLeft: 25,
        marginRight: 15,
    },
    text: {
        color: colors.blue,
        fontSize: 17,
        marginBottom: 4,
    },
});
