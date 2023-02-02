import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export function CustomersScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-lg font-semibold text-red-400'>CustomersScreen</Text>
    </View>
  )
}