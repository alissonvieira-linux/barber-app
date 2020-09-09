import React, { useState, useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Modalize } from 'react-native-modalize';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  ModalTitle,
  ModalText,
  ModalizeContainer,
  ModalCloseButton,
  ModalCloseButtonText
} from './styles';

import CustomInput from '../../components/CustomInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import { useNavigation } from '@react-navigation/native';

export default function Login () {
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function openModal() {
    modalizeRef.current?.open();
  }

  function closeModal() {
    modalizeRef.current?.close();
  }

  async function handleLogin() {

    if (email === "alissonvieira@gmail.com" && password === "1234") {
      await AsyncStorage.setItem('login_status', "1");

      navigation.reset({
        routes: [{name: 'TabStack'}]
      });
    } else {
      openModal();
    }
  }

  return(
    <>
      <Container>
        
        <BarberLogo width="100%" height="160" />

        <InputArea>
          <CustomInput 
            Icon={EmailIcon} 
            placeholder="Digite seu e-mail" 
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <CustomInput 
            Icon={LockIcon} 
            placeholder="Digite sua senha" 
            value={password}
            password={true}
            onChangeText={(text) => setPassword(text)}
          />

          <CustomButton onPress={handleLogin}>
            <CustomButtonText>ENTRAR</CustomButtonText>
          </CustomButton>
        </InputArea>

        <Modalize
          ref={modalizeRef}
          snapPoint={180}
          modalHeight={180}
        >
          <ModalizeContainer>
            <ModalTitle>Ops!</ModalTitle>
            <ModalText>E-mail ou senha incorretos.</ModalText>
            <ModalCloseButton onPress={closeModal}>
              <ModalCloseButtonText>Tente novamente</ModalCloseButtonText>
            </ModalCloseButton>
          </ModalizeContainer>

        </Modalize>
      </Container>
    </>
  );
}