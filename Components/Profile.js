import React from 'react';
import styled from 'styled-components/native';

export const ProfileView = styled.TouchableOpacity`
  border-width: 1px;
  width: ${props => props.width};
  height: 65px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding: 2%;
`;

export const ProfileText = styled.Text`
  color: black;
`;

export default function Profile({name, width}) {
  return (
    <ProfileView width={width}>
      <ProfileText>{name}</ProfileText>
    </ProfileView>
  );
}
