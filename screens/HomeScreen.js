import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() =>{
        navigation.setOptions({
            title:"Signal",
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {color: "black"},
            headerTintColor: "black"
        })

    },[])

	return (
		<SafeAreaView>
			<ScrollView>
                <CustomListItem />
            </ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
