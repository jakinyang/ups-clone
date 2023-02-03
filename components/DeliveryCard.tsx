import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider, Icon } from '@rneui/themed';

type Props = {
  order: Order
};

export function DeliveryCard({ order }: Props) {
  return (
    <Card containerStyle={{
      backgroundColor: "#59C1CC",
      marginVertical: 2,
      borderRadius: 10,
      padding: 0,
      paddingTop: 16,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }} >
      <View>
        <Icon 
          name='box'
          type='entypo'
          color="white"
        />
        <View> 
          <Text className='text-xs text-center uppercase text-white font-bold'>
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white text-center text-lg font-bold">Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}</Text>
          <Divider color='white' />
        </View>
        <View className='mx-auto'>
          <Text className='text-center text-white font-bold mt-5 text-base'>Address</Text>
          <Text className='text-sm text-center text-white'>
            {order.Address}, {order.City}
          </Text>
          <Text className='text-sm text-center text-white italic'>Shipping Cost: ${order.shippingCost}</Text>
        </View>
      </View>
      <Divider color='white'/>
      {order.TrackingItems.items.map((item) => (
        <View className='p-5'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-sm italic text-white'>{item.name}</Text>
            <Text className='text-white text-xl'>x {item.quantity}</Text>
          </View>
        </View>
      ))}
    </Card>
  )
}