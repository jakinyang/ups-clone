import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { TabStackParamList } from '../navigator/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Icon } from '@rneui/themed';
import { DeliveryCard } from '../components/DeliveryCard';

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;


export function OrderScreen() {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>()
  return (
    <View className=''>
      <TouchableOpacity
        className='absolute right-5 top-5 z-50'
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="closecircle"
          type='antdesign'
        />
      </TouchableOpacity>
      <DeliveryCard order={order} fullWidth={true}/>
    </View>
  )
}