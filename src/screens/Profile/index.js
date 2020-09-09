import React from 'react';
import { Button, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.removeItem('login_status');
    navigation.navigate('Login');
  }

  return (
    <Button onPress={handleLogout} title="Fazer logout" />
  );
}