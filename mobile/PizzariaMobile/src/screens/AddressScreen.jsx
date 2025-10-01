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

import { HeaderAddress } from '../components/Header';

function processFinally() {
    return (
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
                    <Text style={styles.nameStepsBold}>Endereço</Text>
                </View>
                <View style={styles.verticalLine} />
            </View>

            <View style={styles.stepGroup}>
                <View style={styles.stepsOrder}>
                    <Text style={styles.numberSteps}>3</Text>
                    <Text style={styles.nameSteps}>Pagamento</Text>
                </View>
            </View>
        </View>
    );
}
export { processFinally };

export default function AddressScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        GreatVibes: require('../../assets/fonts/GreatVibes-Regular.ttf'),
        'GlacialIndifference-Regular': require('../../assets/fonts/GlacialIndifference-Regular.otf'),
        'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.containerAddr}>
            {/* Header */}
            <HeaderAddress />

            {/* Processo do pedido */}
            <processFinally/>

            {/* Formulário de endereço */}
            <View style={styles.formAddr}>
                <TextInput
                    style={styles.inputAddr}
                    placeholder="CEP"
                    placeholderTextColor={'#6b2e2e'}
                    // value={name}
                    // onChangeText={setName}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Logradouro:"
                    placeholderTextColor={'#6b2e2e'}
                    // value={phone}
                    // onChangeText={setPhone}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Número:"
                    placeholderTextColor={'#6b2e2e'}
                    // value={name}
                    // onChangeText={setName}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Complemento:"
                    placeholderTextColor={'#6b2e2e'}
                    // value={date}
                    // onChangeText={setDate}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Bairro:"
                    placeholderTextColor={'#6b2e2e'}
                    // value={time}
                    // onChangeText={setTime}
                />
                <TextInput
                    style={styles.inputAddr}
                    placeholder="Ponto de referência:"
                    placeholderTextColor={'#6b2e2e'}
                    // value={numberOfPeople}
                    // onChangeText={setNumberOfPeople}
                />

                <TouchableOpacity style={styles.buttonAddr}>
                    <Text style={styles.buttonAddrText}>Continuar</Text>
                </TouchableOpacity>
            </View>

            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerAddr: {
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
