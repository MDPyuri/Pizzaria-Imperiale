import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// --- Header HomePage ---
export default function HeaderHomePage() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/img/Logo.png')}
                style={styles.logoHeader}
            />
            <Text style={styles.titleHeaderHome}>Vila Imperiale</Text>
        </View>
    );
}

// --- Header Cardapio ---
export function HeaderMenu() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Cardápio</Text>
        </View>
    );
}

// --- Header Pedido ---
export function HeaderCart() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Pedido</Text>
        </View>
    );
}

// --- Header Endereço ---
export function HeaderAddress() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Endereço</Text>
        </View>
    );
}

// --- Header Pagamento ---
export function HeaderPayment() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Pagamento</Text>
        </View>
    );
}

// --- Header Reserva ---
export function HeaderReservation() {
    const [fontsLoaded] = useFonts({
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>Reserva</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e4b32',
        paddingTop: 20,
    },
    logoHeader: {
        width: 48,
        height: 48,
        resizeMode: 'contain', // mantém proporção
        marginRight: 9, // espaço entre logo e texto
    },
    titleHeader: {
        color: '#f5f3e7',
        fontSize: 40,
        fontFamily: 'GreatVibes',
    },
    titleHeaderHome: {
        color: '#f5f3e7',
        fontSize: 38,
        fontFamily: 'GreatVibes',
    },
});
