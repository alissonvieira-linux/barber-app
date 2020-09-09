import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#63C2D1" barStyle="light-content" />
      <MainStack />
    </NavigationContainer>    
  );
}
