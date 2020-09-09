import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  elevation: 2;
  border-radius: 4px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

const AvatarArea = styled.View`
  background-color: #ddd;
  height: 70px;
  width: 70px; 
  border-radius: 4px;
`;

const Avatar = styled.Image`
  border-radius: 4px;
  flex: 1;
`;

const BarberInfoArea = styled.View`
  margin-left: 15px;
`;

const BarberName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const BarberContact = styled.Text`
  font-size: 12px;
  color: #aaa;
  font-weight: bold;
`;
const BarberEmail = styled.Text`
  font-size: 14px;
  color: #aaa;
`;
const BarberCity = styled.Text`
  margin-top: 5px;
  color: #888;
  font-size: 13px;
`;

export default function BarberItem({ data }) {
  return (
    <Container>
      <AvatarArea>
        <Avatar source={{uri: data.avatar}} />
      </AvatarArea>

      <BarberInfoArea>
        <BarberName>{ data.name }</BarberName>
        <BarberContact>{ data.contact }</BarberContact>
        <BarberEmail>{ data.email }</BarberEmail>
        <BarberCity>{ data.city } - { data.uf }</BarberCity>
      </BarberInfoArea>
    </Container>
  );
}