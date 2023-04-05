import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Hello from './components/Hello';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import {StackParamList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<StackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Info" component={InfoScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
