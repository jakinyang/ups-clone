import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export function CustomersScreen() {
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
        className="w-fulll h-64"
      />

      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg font-semibold text-white'>CustomersScreen</Text>
      </View>
    </ScrollView>
  )
}