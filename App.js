import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, ButtonGroup, Icon, ThemeProvider } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationService from './NavigationService';
import StreamingMedia from './components/StreamingMedia';
import ContentScreen from './screens/ContentScreen';

const theme = {
  colors: {
    primary: 'blue'
  }
};


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Content: { screen: ContentScreen },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  });

const AppContainer = createAppContainer(AppNavigator);

const HomeIcon = () => {
  return (
    <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
      <Icon name='home' color='white' />
      <Text style={{ color: 'white' }}>Home</Text>
    </TouchableOpacity>
  )
}

const MapIcon = () => {
  return (
    <TouchableOpacity onPress={() => NavigationService.navigate('Map')}>
      <Icon name='room' color='white' />
      <Text style={{ color: 'white' }}>Map</Text>
    </TouchableOpacity>
  )
}

const BottomTabs = [
  { element: HomeIcon },
  { element: MapIcon }
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <View style={{
          flex: 1,
        }}>
          <Header
            leftComponent={{ text: 'Enroute', style: { color: 'white' } }}
            rightComponent={{ icon: 'home', color: 'white' }}
          />
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <ButtonGroup
            buttons={BottomTabs}
            containerStyle={{
              marginBottom: 0,
              width: '100%',
              height: '8%',
              backgroundColor: theme.colors.primary
            }}
            innerBorderStyle={{
              color: theme.colors.primary
            }}
          />
        </View>
      </Provider>
    </ThemeProvider>
  );
}