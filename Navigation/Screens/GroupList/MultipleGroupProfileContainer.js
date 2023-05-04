import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../../../Components/Container';
import Profile from '../../../Components/Profile';

const Title = styled.Text`
  color: black;
  padding: 10px;
`;

const ProfileList = styled.FlatList``;

const renderItem = ({item}) => {
  return <Profile name={item.name} width={'92%'} />;
};

export default function MultipleGroupProfileContainer({title, grouplist}) {
  return (
    <Container>
      <Title>{title}</Title>
      <ProfileList
        data={grouplist}
        renderItem={renderItem}
        keyExtrator={list => list.id}
      />
    </Container>
  );
}
