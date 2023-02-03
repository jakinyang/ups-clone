import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import { useCustomerOrders } from '../hooks/useCustomerOrders'
import { DeliveryCard } from '../components/DeliveryCard'

type props = {
  userId: string
  name: string
}

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "Modal">
>

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>

export function ModalScreen() {

  const navigation = useNavigation<ModalScreenNavigationProp>();

  const { params: { name, userId } } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        className='absolute right-5 top-5 z-50'
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="closecircle"
          type='antdesign'
        />
      </TouchableOpacity>
      <View className='mt-10'>
        <View className='py-5 border-b border-[#59C1CC]'>
          <Text className='text-center text-xl font-bold text-[#59C1CC]'>{name}</Text>
          <Text className="text-center italic text-sm ">Deliveries</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => (
          <DeliveryCard order={order} />
        )}
      />
    </View>
  )
}