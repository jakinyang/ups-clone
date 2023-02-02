import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { CustomersScreen } from '../screens/CustomersScreen';
import { TabNavigator } from './TabNavigator';

// Type Def
export type RootStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string; }
  Order: { order: any }
}
const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name='Main' component={TabNavigator} options={{headerShown: false}} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}