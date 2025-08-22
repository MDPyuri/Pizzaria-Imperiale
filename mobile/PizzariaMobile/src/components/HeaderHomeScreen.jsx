import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HeaderHomeScreen() {
    return (
        <View style={styles.headerHome}>
            <Image></Image>
            <Text>Vila Imperiale</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: '#2e4b32',
    },
});