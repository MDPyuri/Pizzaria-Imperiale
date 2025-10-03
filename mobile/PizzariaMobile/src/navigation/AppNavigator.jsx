import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ReservationScreen from '../screens/ReservationScreen';
import Screen2 from '../screens/Screen2';
import AddressScreen from '../screens/AddressScreen';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="AddressScreen" component={AddressScreen} />
                <Stack.Screen name="Screen4" component={Screen4} />
                <Stack.Screen name="Screen5" component={Screen5} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
