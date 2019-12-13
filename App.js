import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return(
    <Provider store={store}>
      <View style={{ 
        flex: 1,
      }}>
        <Header
          leftComponent={{ text: 'Enroute', style: { color: 'white' }}}
          rightComponent={{ icon: 'home', color: 'white' }} 
        />
        <AppContainer />
      </View>
    </Provider>
  );
}