import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCustomerOrders } from '../hooks/useCustomerOrders';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/base';

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
      <Card>
        <View></View>
      </Card>
    </TouchableOpacity>
  )
}