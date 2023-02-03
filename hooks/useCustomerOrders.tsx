import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS, GET_ORDERS } from '../graphql/queries'

export function useCustomerOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order>()  

  return (
    <View>
      <Text>useCustomerOrders</Text>
    </View>
  )
}