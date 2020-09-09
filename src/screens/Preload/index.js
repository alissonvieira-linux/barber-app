import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LoadingIcon
} from './styles';

import BarberLogo from '../../assets/barber.svg';

export default function Preload () {
  const navigation = useNavigation();

  useEffect(() => {
    async function getLoginStatus() {
      const status = await AsyncStorage.getItem('login_status');

      if (status === "1") {
        navigation.reset({
          routes: [{name: 'TabStack'}]
        });
      } else {
        navigation.navigate('Login');
      }
    }
    getLoginStatus();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#fff" />
    </Container>

  );
}