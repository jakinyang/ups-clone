import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS, GET_ORDERS } from '../graphql/queries'

export function useOrders() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    if (!data) return;
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      TrackingItems: value.TrackingItems,
      Lat: value.Lat,
      Lng: value.Lng,
      Address: value.Address,
      City: value.City,
    }));
    setOrders(orders);
  }, [data])
  
  return { loading, error, orders }
}