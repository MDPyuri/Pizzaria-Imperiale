import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {

    const [fontsLoaded] = useFonts({
        'GlacialIndifference': require('../../assets/fonts/GlacialIndifference-Regular.otf'), 
        'GreatVibes': require('../../assets/fonts/GreatVibes-Regular.ttf'),
        'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf')
    });
        if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.container}>
            <Header />
            {/* BANNER */}
            <Image
                source={require('../../assets/banner.png')} // coloque a imagem da pizza aqui
                style={styles.banner}
                resizeMode="cover"
            />

            {/* CARDÁPIO */}
            <View style={styles.cardapioContainer}>
                <View style={styles.lineCardapio} />
                <Text style={styles.titleCardapio}>Cardápio</Text>
                <View style={styles.lineCardapio} />

                <View style={styles.categories}>
                    <TouchableOpacity style={styles.item}>
                        <Image
                            source={require('../../assets/pizzaSalgada.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemText}>Pizzas salgadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image
                            source={require('../../assets/pizzaDoce.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemText}>Pizzas doces</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image
                            source={require('../../assets/pizzaVegana.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemText}>Pizzas veganas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },

    banner: {
        maxWidth: 450.5,
        maxHeight: 359.5,
        resizeMode: 'cover',
    },

    cardapioContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    lineCardapio: {
        width: 300,
        height: 2,
        backgroundColor: '#c5a15c',
    },
    titleCardapio: {
        fontSize: 40,
        color: '#6b2e2e',
        fontWeight: '600',
        fontFamily: 'GreatVibes',
    },

    categories: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        gap: 5,
    },
    item: {
        width: 100,
        position: 'relative',
        justifyContent: 'center',
        margin: 5,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 17,
        fontFamily: 'GlacialIndifference-Bold',
        color: '#6b2e2e',
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        opacity: 0.8,
    },
});
