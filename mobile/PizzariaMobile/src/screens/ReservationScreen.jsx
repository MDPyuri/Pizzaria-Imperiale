import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import NavBar from '../components/NavBar';

import { HeaderReservation } from '../components/Header';

export default function ReservationScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [preferences, setPreferences] = React.useState('');
  const [numberOfPeople, setNumberOfPeople] = React.useState('');

  const [fontsLoaded] = useFonts({
      'GlacialIndifference-Regular': require('../../assets/fonts/GlacialIndifference-Regular.otf'),
      'GlacialIndifference-Bold': require('../../assets/fonts/GlacialIndifference-Bold.otf'),
  });
  if (!fontsLoaded) {
      return null;
  }

  function handleReservation() {
    console.log({ name, phone, date, time, preferences, numberOfPeople });
    alert('Reservation submitted!');
  }

  return (
      <View style={styles.container}>
          <HeaderReservation />
          <Text style={styles.text}>
              Para garantir sua experiência na Vila Imperiale, recomendamos que
              as reservas sejam feitas com pelo menos 24 horas de antecedência.
              As mesas são mantidas por até 15 minutos após o horário marcado.
              Após a solicitação, você receberá a confirmação via WhatsApp.
          </Text>
          <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              placeholderTextColor={'#6b2e2e'}
              value={name}
              onChangeText={setName}
          />
          <TextInput
              style={styles.input}
              placeholder="Telefone"
              placeholderTextColor={'#6b2e2e'}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
          />
          <TextInput
              style={styles.input}
              placeholder="Data (DD/MM/AAAA)"
              placeholderTextColor={'#6b2e2e'}
              value={date}
              onChangeText={setDate}
              keyboardType="numeric"
          />
          <TextInput
              style={styles.input}
              placeholder="Hora (HH:MM)"
              placeholderTextColor={'#6b2e2e'}
              value={time}
              onChangeText={setTime}
              keyboardType="numeric"
          />
          <TextInput
              style={styles.input}
              placeholder="Número de Pessoas"
              placeholderTextColor={'#6b2e2e'}
              value={numberOfPeople}
              onChangeText={setNumberOfPeople}
              keyboardType="numeric"
          />
          <TextInput
              style={styles.input}
              placeholder="Preferências (opcional)"
              placeholderTextColor={'#6b2e2e'}
              value={preferences}
              onChangeText={setPreferences}
          />
          <Text style={styles.textBold}>Estamos esperando por você!</Text>
          <TouchableOpacity style={styles.button} onPress={handleReservation}>
              <Text style={styles.buttontext}>RESERVAR</Text>
          </TouchableOpacity>
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
    text: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 16,
        marginBottom: 10,
        color: '#6b2e2e',
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 10,
    },
    textBold: {
        fontFamily: 'GlacialIndifference-Bold',
        fontSize: 16,
        marginBottom: 10,
        color: '#6b2e2e',
        textAlign: 'center',
    },
    input: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 16,
        height: 40,
        borderColor: '#e6d6b8',
        borderWidth: 1,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: '#e6d6b8',
        borderRadius: 15,
    },
    button: {
        backgroundColor: '#e6d6b8',
        borderWidth: 1,
        borderColor: '#c5a15c',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 100,
        marginBottom: 80,
    },
    buttontext: {
        fontFamily: 'GlacialIndifference-Regular',
        fontSize: 18,
        color: '#6b2e2e',
        textAlign: 'center',
    },
});