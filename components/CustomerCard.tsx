import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCustomerOrders } from '../hooks/useCustomerOrders';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/base';
import { Icon } from '@rneui/themed';

type Props = {
  userId: string;
  name: string;
  email: string;
}

export function CustomerCard({ userId, name, email }: Props) {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation();

  return (
    <TouchableOpacity>
      <Card
        containerStyle={{
          padding: 20,
          borderRadius: 10
        }}
      >
        <View>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-2xl font-bold'>{name}</Text>
              <Text className='text-sm text-[#59C1CC]'>ID: {userId}</Text>
            </View>
            <View className=''>
              <Text>{loading ? "Loading...." : `${orders.length} x`}</Text>
              <Icon
                style={{
                  marginBottom: 5,
                  marginLeft: 'auto'
                }}
                name="box"
                type='entypo'
                color='#59C1CC'
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  )
}