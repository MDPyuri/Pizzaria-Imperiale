import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ReservationScreen from '../screens/ReservationScreen';
import MenuScreen from '../screens/MenuScreen';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
                <Stack.Screen name="MenuScreen" component={MenuScreen} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="Screen4" component={Screen4} />
                <Stack.Screen name="Screen5" component={Screen5} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
