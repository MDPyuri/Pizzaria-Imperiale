import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import NavBar from '../components/NavBar';
import { useFonts } from 'expo-font';

import { HeaderPayment } from '../components/Header';

export default function PaymentScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        GreatVibes: require('../../assets/fonts/GreatVibes-Regular.ttf'),
        'GlacialIndifference-Regular': require('../../assets/fonts/GlacialIndifference-Regular.otf'),
        'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.containerPayment}>
            {/* Header */}
            <HeaderPayment />

            {/* Processo do pedido */}
            <View style={styles.processFinally}>
                <View style={styles.stepGroup}>
                    <View style={styles.stepsOrder}>
                        <Text style={styles.numberSteps}>1</Text>
                        <Text style={styles.nameSteps}>Pedido</Text>
                    </View>
                    <View style={styles.verticalLine} />
                </View>

                <View style={styles.stepGroup}>
                    <View style={styles.stepsOrder}>
                        <Text style={styles.numberSteps}>2</Text>
                        <Text style={styles.nameSteps}>Endereço</Text>
                    </View>
                    <View style={styles.verticalLine} />
                </View>

                <View style={styles.stepGroup}>
                    <View style={styles.stepsOrder}>
                        <Text style={styles.numberSteps}>3</Text>
                        <Text style={styles.nameStepsBold}>Pagamento</Text>
                    </View>
                </View>
            </View>

            {/* Opções de pagamento
            <View style={styles.optionsPayment}>
                <TouchableOpacity style={styles.options}>
                    <Text style={styles.options}>Cartão de crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.options}>
                    <Text>Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.options} >
                    <Text>Na entrega</Text>
                </TouchableOpacity>
            </View> */}

            {/* Cartão de crédito */}
            <View style={styles.formAddr}>
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Nome do cartão:"
                    placeholderTextColor={'#6b2e2e'}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Número de cartão:"
                    placeholderTextColor={'#6b2e2e'}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Validade:"
                    placeholderTextColor={'#6b2e2e'}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="CVV:"
                    placeholderTextColor={'#6b2e2e'}
                />

                <TouchableOpacity style={styles.buttonAddr}>
                    <Text style={styles.buttonAddrText}>Finalizar pedido</Text>
                </TouchableOpacity>
            </View>

            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerPayment: {
        backgroundColor: '#f5f3e7',
        flex: 1,
        padding: 0,
    },
    inputAddr: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 16,
        height: 42,
        borderColor: '#e6d6b8',
        borderWidth: 1,
        marginBottom: 11,
        width: '85%',
        paddingHorizontal: 11,
        backgroundColor: '#e6d6b8',
        borderRadius: 15,
        color: '#6b2e2e',
    },
    formAddr: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAddr: {
        backgroundColor: '#e6dbc7',
        borderColor: '#c5a15c',
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 25,
        marginTop: 10,
    },
    buttonAddrText: {
        fontSize: 16,
        color: '#6b2e2e',
        fontFamily: 'GlacialIndifference-Bold',
    },

    processFinally: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontFamily: 'GlacialIndifference-Regular',
    },
    stepGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepsOrder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    verticalLine: {
        width: 18,
        height: 2,
        backgroundColor: '#c5a15c',
    },
    numberSteps: {
        backgroundColor: '#e6d6b8',
        borderRadius: 50,
        width: 27,
        height: 27,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 5,
        fontFamily: 'GlacialIndifference-Bold',
        color: '#2e4b32',
    },
    nameSteps: {
        fontSize: 15,
        fontFamily: 'GlacialIndifference-Regular',
        color: '#2e4b32',
    },
    nameStepsBold: {
        fontFamily: 'GlacialIndifference-Bold',
        color: '#2e4b32',
        fontSize: 15,
    },
});