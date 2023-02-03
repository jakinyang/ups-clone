import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

type Props = {
  item: Order;
}

type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export function OrderCard({ item }: Props) {
  const navigation = useNavigation<OrderScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card containerStyle={{ paddingHorizontal: 10, borderRadius: 10 }}>
        <View className='flex-row justify-between items-center'>
          <View>
            <Icon
              name='truck-delivery'
              color="#EB6A7C"
              type='material-community'
            />
            <Text className="text-xs">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
          <View className='ml-2'>
            <Text className='text-gray-400 text-xs'>{item.carrier}-{item.trackingId}</Text>
            <Text className='text-gray-500 text-lg'>{item.TrackingItems.customer.name}</Text>
          </View>

          <View className='flex-row items-center'>
            <Text
              className='text-sm text-[#EB6A7C] mx-2'
            >{item.TrackingItems?.items.length} x</Text>
            <Icon
              className='ml-2'
              name='box'
              type='feather'
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}