import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import { CustomersScreen } from '../screens/CustomersScreen';
import { OrdersScreen } from '../screens/OrdersScreen';

export function TabNavigator() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="CustomersScreen" component={CustomersScreen}/>
      <Tab.Screen name="OrdersScreen" component={OrdersScreen}/>
    </Tab.Navigator>
  )
}