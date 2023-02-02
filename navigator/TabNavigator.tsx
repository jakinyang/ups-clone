import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed'

// Components
import { CustomersScreen } from '../screens/CustomersScreen';
import { OrdersScreen } from '../screens/OrdersScreen';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();
export function TabNavigator() {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "lightslategray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Customers') {
            return (
              <Icon 
                name="users"
                type='feather'
              />
            )
          } else if (route.name === 'Orders') {
            return (
              <Icon 
                name='package'
                type='feather'
              />
            )
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}