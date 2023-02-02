import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Input } from '@rneui/themed'

// Type Params
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function CustomersScreen() {
  const [input, setInput] = useState<string>("")

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
        source={{uri: "https://links.papareact.com/3jc"}}
        className="w-full h-64"
      />
      <Input 
        placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={{backgroundColor: "white", paddingTop: 5, paddingBottom: 0, paddingHorizontal: 30}}
      />
      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg font-semibold text-white'>CustomersScreen</Text>
      </View>
    </ScrollView>
  )
}