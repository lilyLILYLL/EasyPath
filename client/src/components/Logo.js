import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const screen = Dimensions.get("window");
const radio = screen.width / 1417;
export const Logo = ({ size }) => {
    return (
        <View>
            <Image
                source={require("../assets/UOWLogos/UOW_Primary_RGB_Black.png")}
                style={[
                    styles.logo,
                    { width: screen.width * size, height: 1166 * radio * size },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        marginTop: 20,
        marginBottom: 10,
        alignSelf: "center",
    },
});
