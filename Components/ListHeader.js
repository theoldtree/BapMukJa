import React from 'react';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

const Header = styled.View`
  height: 55px;
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.TouchableOpacity`
  margin: 0px 10px;
`;

export default function ListHeader({iconName, onPress}) {
  return (
    <Header>
      <Icon onPress={onPress}>
        {iconName === 'person-add' ? (
          <Ionicons name={iconName} size={24} color="black" />
        ) : (
          <MaterialIcons name="group-add" size={35} color="black" />
        )}
      </Icon>
    </Header>
  );
}
