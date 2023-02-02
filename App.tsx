import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { CustomersScreen } from './screens/CustomersScreen';
import { RootNavigator } from './navigator/RootNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}