import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function NavBar({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ReservationScreen')}
            >
                <FontAwesome name="home" size={30} color="#f5f3e7" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                <FontAwesome5 name="pizza-slice" size={30} color="#f5f3e7" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
                <FontAwesome5 name="shopping-cart" size={30} color="#f5f3e7" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen4')}>
                <Ionicons name="calendar-outline" size={30} color="#f5f3e7" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
                <Ionicons
                    name="person-circle-outline"
                    size={30}
                    color="#f5f3e7"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#2e4b32',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
});
