import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import TabStack from '../stacks/TabStack';
import Preload from '../screens/Preload';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
      initialRouteName="Preaload"
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
}