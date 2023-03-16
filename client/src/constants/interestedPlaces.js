import {
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        color: colors.blue,
    },
});
export default [
    {
        icon: <MaterialIcons name="house" style={styles.icon} />,
        location: "Student Central",
    },
    {
        icon: <Ionicons name="library" style={styles.icon} />,
        location: "Library",
    },
    {
        icon: <FontAwesome name="bank" style={styles.icon} />,
        location: "Bank",
    },
    {
        icon: <MaterialIcons name="food-bank" style={styles.icon} />,
        location: "Food Court",
    },
    {
        icon: <FontAwesome5 name="coffee" style={styles.icon} />,
        location: "Coffee Shop",
    },
    {
        icon: <MaterialCommunityIcons name="bus-stop" style={styles.icon} />,
        location: "Bus Stop",
    },
    {
        icon: <FontAwesome5 name="parking" style={styles.icon} />,
        location: "Parking",
    },
    {
        icon: <MaterialIcons name="security" style={styles.icon} />,
        location: "Security",
    },
    {
        icon: <FontAwesome5 name="table-tennis" style={styles.icon} />,
        location: "Sport",
    },
    {
        icon: <MaterialIcons name="local-movies" style={styles.icon} />,
        location: "Uni Movies",
    },
];
