import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import FilterPizza from '../components/Menu/FilterPizza';
import { HeaderMenu } from '../components/Header';


export default function MenuScreen({ navigation }) {
    return (
        <View >
            {/* <Text style={styles.text}>Olá</Text> */}
            <HeaderMenu/>
            <FilterPizza/>
            {/* <NavBar navigation={navigation} /> */}
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f0f0f0',
//     },
//     text: {
//         fontSize: 20,
//         marginBottom: 20,
//     },
// });