import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ReservationScreen from '../screens/ReservationScreen';
import HomeScreen from '../screens/HomeScreen';
import Screen2 from '../screens/Screen2';
import AddressScreen from '../screens/AddressScreen';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import PaymentScreen from '../screens/PaymentScreen';
import SignScreen from '../screens/SignScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="AddressScreen" component={AddressScreen} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="ReservationScreen" component={ReservationScreen}/>
                <Stack.Screen name="SignScreen" component={SignScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
