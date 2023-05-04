import React from 'react';
import styled from 'styled-components/native';
import Profile from './Profile';

const Container = styled.View`
  border-bottom: 1px;
  border-color: black;
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: black;
  padding: 10px;
`;

export default function ProfileContainer({title, profile}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Profile name={profile.name} width={'92%'} />
    </Container>
  );
}
