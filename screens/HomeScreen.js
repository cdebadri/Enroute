import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemComponent from '../components/ItemComponent';

export default function HomeScreen() {
  const items = [
    '../assets/45_big.jpg',
    '../assets/asd.jpg',
    '../assets/group.jpg',
    '../assets/group.jpg',
    '../assets/group.jpg',
  ]
  return (
    <View>
      <ItemComponent items={items} />
    </View>
  );
}

