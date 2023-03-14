import { StyleSheet, Text, View, Dimensions, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";

export const KeyBoardSpacer = ({ onToggle }) => {
    const [keyBoardSpacer, setKeyBoardSpacer] = useState(0);

    useEffect(() => {
        const actualHeight = Dimensions.get("window").height;

        const keyBoardShow = Keyboard.addListener(
            "keyboardDidShow",
            (event) => {
                const keyBoardHeight = event.endCoordinates.height;
                setKeyBoardSpacer(keyBoardHeight);
                onToggle(true);
            }
        );

        const keyBoardHide = Keyboard.addListener(
            "keyboardDidHide",
            (event) => {
                setKeyBoardSpacer(0);
                onToggle(false);
            }
        );
        return () => {
            keyBoardShow.remove();
            keyBoardHide.remove();
        };
    }, []);

    return <View style={[styles.container, { height: keyBoardSpacer }]}></View>;
};

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 0,
        right: 0,
    },
});
