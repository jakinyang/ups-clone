import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useOrders } from '../hooks/useOrders';
import { Button } from '@rneui/themed';
import { OrderCard } from '../components/OrderCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export function OrdersScreen() {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10 }}>
          Orders
        </Text>
      )
    })
  }, [])

  return (
    <ScrollView className='bg-[#EB6A7C]'>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        className="w-full h-64"
      />
      <View className='mx-2'>
        <View className='mx-10'>
          <Button
            color='pink'
            titleStyle={{ color: "gray", fontWeight: "400" }}
            className="py-2 px-5"
            onPress={() => setAscending(!ascending)}
            title={ascending ? "Showing Oldest First" : "Showing Most Recent First"}
          />
        </View>
        {orders?.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1;
          }
        }).map(order => (
          <OrderCard key={order.trackingId} item={order} />
        ))}

      </View>
    </ScrollView>
  )
}