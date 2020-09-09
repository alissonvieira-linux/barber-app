import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ModalizeContainer = styled.View`
  flex: 1;
  padding: 25px;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 5px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #222;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  height: 50px;
  border-radius: 6px;
  background-color: #222;
  align-items: center;
  justify-content: center;
`;

export const ModalCloseButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;