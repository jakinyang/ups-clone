import { View, Text, LayoutAnimation } from 'react-native'
import React from 'react'
import { Card, Divider, Icon } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';

type Props = {
  order: Order
  fullWidth?: boolean
};

export function DeliveryCard({ order, fullWidth }: Props) {
  return (
    <Card containerStyle={[fullWidth ? { borderRadius: 0, width: "100%", marginHorizontal: 0 } : { borderRadius: 10 }, {
      backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
      marginVertical: fullWidth ? -2 : 2,
      padding: 0,
      paddingTop: 16,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }]} >
      <View style={fullWidth && { height: "100%" }}>
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

          <View className='mx-auto pb-5'>
            <Text className='text-center text-white font-bold mt-5 text-base'>Address</Text>
            <Text className='text-sm text-center text-white'>
              {order.Address}, {order.City}
            </Text>
            <Text className='text-sm text-center text-white italic'>Shipping Cost: ${order.shippingCost}</Text>
          </View>

          <Divider color='white' />
          {order.TrackingItems.items.map((item) => (
            <View className='p-2' key={item.item_id}>
              <View className='flex-row justify-between items-center'>
                <Text className='text-sm italic text-white'>{item.name}</Text>
                <Text className='text-white text-xl'>x {item.quantity}</Text>
              </View>
            </View>
          ))}
        </View>
        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
          className={fullWidth ? "w-full h-full" : "w-full h-64"}
        >
          {order.Lat && order.Lng && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  )
}