import React from 'react';
import { ScrollView, ActivityIndicator, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import NavigationService from '../NavigationService';

const getCard = (item) => {
  return (
    <Card
      containerStyle={{
        width: '100%', 
        marginHorizontal: 0,
        marginVertical: 0,
      }}
      image={require('../assets/asd.jpg')}
      imageProps={{PlaceholderContent: <ActivityIndicator />}}
    >
      <Text style={{marginBottom: 10}}>
        {item.name}
      </Text>
    </Card>
  );
}

export default ItemComponent = (props) => {
  const { items } = props;
  return (
    <ScrollView style={{width: '100%', padding: 0}}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => NavigationService.navigate('Content', {
          path: item.url.mp4 || item.url,
        })}>
          {getCard(item)}
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
