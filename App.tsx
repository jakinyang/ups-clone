import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { CustomersScreen } from './screens/CustomersScreen';
import { RootNavigator } from './navigator/RootNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://mornington.stepzen.net/api/idle-toucan/__graphql',
  headers: {'Authorization':'apikey mornington::stepzen.io+1000::03bd1086ef287cee8f5e2a20eb5f776650ea378076acc7e002e706ef160cfe31'},
  cache: new InMemoryCache(),
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}