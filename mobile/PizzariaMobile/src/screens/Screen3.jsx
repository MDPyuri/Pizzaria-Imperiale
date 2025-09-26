import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function Screen3({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen 3</Text>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});
