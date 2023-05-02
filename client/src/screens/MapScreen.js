import { StyleSheet, SafeAreaView, Text } from "react-native";
import React, { useContext, useRef, useEffect } from "react";
import colors from "../constants/colors";
import { SearchContext } from "../contexts/SearchContext";
import moment from "moment";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { Map } from "../components/Map";
import { BottomModalView } from "../components/layout/BottomModalView";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { MapSearchBox } from "../components/MapSearchBox";

const DUMMY_TIME = 6;

export const MapScreen = ({ navigation, route }) => {
    const { addRecentSearch } = useContext(SearchContext);
    const currentDate = moment().format("DD/MM/YYYY");

    // ref to the bottom modal sheet
    const bottomSheetModal = useRef(null);

    useEffect(() => {
        bottomSheetModal?.current?.present();
    }, []);

    const search = (startPoint, destination) => {
        addRecentSearch(startPoint, destination, currentDate, DUMMY_TIME);
    };

    return (
        // put modalProvider here because only mapScreen can open a bottomSheetModal
        <BottomSheetModalProvider>
            <SafeAreaView style={styles.container}>
                <StatusBarForm />

                <MapSearchBox />

                <Map />
                <BottomSheetModal
                    ref={bottomSheetModal}
                    snapPoints={["21%"]} // the points for the bottom sheet to snap to, which should be soted from bottom to the the top
                    index={0} // initial snap index, usually [-1,0]
                >
                    <BottomModalView />
                </BottomSheetModal>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    startButton: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginHorizontal: 150,
        borderRadius: 15,
        backgroundColor: colors.blue,
        justifyContent: "center",
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 100,
        fontSize: 30,
    },
});
