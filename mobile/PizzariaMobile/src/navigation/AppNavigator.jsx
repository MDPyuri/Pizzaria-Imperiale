import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Screen 1" component={Screen1} />
                <Stack.Screen name="Screen 2" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
