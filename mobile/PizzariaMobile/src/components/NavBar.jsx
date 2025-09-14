import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';


export default function NavBar({ navigation }) {
    const route = useRoute();
    const getColor = (screenName) => {
        return route.name === screenName ? '#c5a15c' : '#f5f3e7'; // ativo: dourado
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ReservationScreen')}
            >
                <FontAwesome
                    name="home"
                    size={30}
                    color={getColor('ReservationScreen')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                <FontAwesome5
                    name="pizza-slice"
                    size={30}
                    color={getColor('Screen2')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
                <FontAwesome5
                    name="shopping-cart"
                    size={30}
                    color={getColor('Screen3')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen4')}>
                <Ionicons
                    name="calendar-outline"
                    size={30}
                    color={getColor('Screen4')}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignScreen')}>
                <Ionicons
                    name="person-circle-outline"
                    size={30}
                    color={getColor('SignScreen')}
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
