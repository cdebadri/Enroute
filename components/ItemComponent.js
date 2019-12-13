import React from 'react';
import { ScrollView, ActivityIndicator, Text, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        {item}
      </Text>
    </Card>
  );
}

export default ItemComponent = (props) => {
  const { items } = props;
  return (
    <ScrollView style={{width: '100%', padding: 0}}>
      {items.map((item, index) => (
        <TouchableOpacity key={index}>
          {getCard(item)}
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
