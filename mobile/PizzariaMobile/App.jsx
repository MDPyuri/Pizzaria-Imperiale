import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HeaderHomeScreen from './src/components/HeaderHomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderHomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
