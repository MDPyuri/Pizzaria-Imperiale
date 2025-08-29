import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <View style={StyleSheet.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})