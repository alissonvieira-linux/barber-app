import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 50px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
`;

export const LocationFinderButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  padding: 25px;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: justify;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  border-radius: 6px;
  background-color: #222;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;