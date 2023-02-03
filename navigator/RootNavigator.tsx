import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { CustomersScreen } from '../screens/CustomersScreen';
import { TabNavigator } from './TabNavigator';
import { ModalScreen } from '../screens/ModalScreen';
import { OrderScreen } from '../screens/OrderScreen';

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
        <RootStack.Screen
          name='Main'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name='Modal'
          component={ModalScreen}
          options={{ 
            headerShown: false,
            presentation: "modal" 
          }}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name='Order'
          component={OrderScreen}
          options={{ 
            headerShown: false,
            presentation: "modal" 
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}