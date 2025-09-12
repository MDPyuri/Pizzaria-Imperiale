// HeaderHomeScreen.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// --- Componente do Header ---
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
                style={styles.logo}
            />
            <Text style={styles.title}>Vila Imperiale</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', // coloca logo e texto lado a lado
        alignItems: 'center', // alinha ao centro na vertical
        justifyContent: 'center', // centraliza na horizontal
        backgroundColor: '#234d2c', // verde de fundo
        paddingHorizontal: 12, // espaço lateral
        paddingVertical: 8, // espaço em cima/baixo
    },
    logo: {
        width: 42, // largura da logo
        height: 42, // altura da logo
        resizeMode: 'contain', // mantém proporção
        marginRight: 9, // espaço entre logo e texto
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'GreatVibes',
    },
});
