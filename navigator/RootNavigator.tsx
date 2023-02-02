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

export function RootNavigator() {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name='Main' component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}