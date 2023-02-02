import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export function OrdersScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View className='flex-1 items-center justify-center'>
    <Text className='text-lg font-semibold text-blue-400'>OrdersScreen</Text>
  </View>
  )
}