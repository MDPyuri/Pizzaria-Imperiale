import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';
import NavBar from '../components/NavBar';

export default function SignScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [fontsLoaded] = useFonts({
        'GlacialIndifference-Regular': require('../../assets/fonts/GlacialIndifference-Regular.otf'),
        'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf'),
        'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null; // ou um componente de carregamento
    }

    function handleSubmit() {
        const userData = {
            name,
            phone,
            cpf,
            email,
            password,
        };
        console.log('Dados do usuário:', userData);

        fetch('http://localhost:3000/usuarios/criar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao cadastrar usuário');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Usuário cadastrado:', data);
                alert('Cadastro realizado!');
                setName('');
                setPhone('');
                setCpf('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Erro ao cadastrar usuário:', error);
                alert('Erro ao realizar o cadastro, tente novamente.');
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Cadastrar</Text>
                <Text style={styles.textBold}>Cadastre-se e descubra um novo sabor de sofisticação.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo:"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone:"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="CPF:"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email:"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha:"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#f5f3e7',
    },
    card: {
        padding: 10,
        backgroundColor: '#e6d6b8',
        width: '80%',
        height: '70%',
        marginTop: '20%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    title: {
        fontSize: 45,
        fontFamily: 'GreatVibes-Regular',
        color: '#6b2e2e',
        textAlign: 'center',
    },
    textBold: {
        fontFamily: 'GlacialIndifference-Bold',
        fontSize: 16,
        marginBottom: 20,
        color: '#6b2e2e',
        textAlign: 'center',
    },
    input: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f5f3e7',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#f5f3e7',
        borderWidth: 1,
        borderColor: '#c5a15c',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 60,
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 18,
        color: '#6b2e2e',
        textAlign: 'center',
    },
});
