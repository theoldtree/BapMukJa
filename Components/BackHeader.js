import React from 'react';
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons';

const Header = styled.View`
  height: 55px;
  flex-direction: row;
  background-color: white;
  align-items: center;
`;

const HedaerTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const BackArrow = styled.TouchableOpacity`
  margin: 0px 10px;
`;

export default function BackHeader({title, onPress}) {
  return (
    <Header>
      <BackArrow onPress={onPress}>
        <AntDesign name="swapleft" size={24} color="black" />
      </BackArrow>
      <HedaerTitle>{title}</HedaerTitle>
    </Header>
  );
}
