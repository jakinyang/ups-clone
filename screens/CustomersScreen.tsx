import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Input } from '@rneui/themed'

// Type Params
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import { CustomerCard } from '../components/CustomerCard';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function CustomersScreen() {
  const [input, setInput] = useState<string>("")
  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const navigation = useNavigation<CustomerScreenNavigationProp>();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView
      className='bg-[#59C1CC]'
    >
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        className="w-full h-64"
      />
      <Input
        placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={{ backgroundColor: "white", paddingTop: 5, paddingBottom: 0, paddingHorizontal: 30 }}
      />
      {data?.getCustomers?.filter(
        (customer: CustomerList) => customer.value.name.includes(input)
      )
        .map(
          ({ name: ID, value: { email, name } }: CustomerResponse) => (
            <CustomerCard key={ID} email={email} userId={ID} name={name} />
          )
        )}
    </ScrollView>
  )
}