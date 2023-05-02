import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext } from "react";
import { StatusBarForm } from "../components/layout/StatusBarForm";
import { HeadBar } from "../components/layout/HeadBar";
import { GoBackIcon } from "../components/layout/Icons";
import { SearchContext } from "../contexts/SearchContext";
import { RecentSearchItem } from "../components/RecentSearchItem";
export const RecentSearchScreen = ({ navigation }) => {
    const {
        state: { recentSearch },
    } = useContext(SearchContext);
    console.log(recentSearch);
    return (
        <SafeAreaView>
            <StatusBarForm />
            <HeadBar
                icon={<GoBackIcon />}
                header="Recent Searches"
                onPress={() => navigation.pop()}
            />
            <ScrollView>
                {recentSearch &&
                    recentSearch.map((item, index) => {
                        return (
                            <RecentSearchItem
                                key={index}
                                startLocation={item.from}
                                destination={item.to}
                                date={item.date}
                                time={item.time}
                            />
                        );
                    })}
            </ScrollView>
        </SafeAreaView>
    );
};
