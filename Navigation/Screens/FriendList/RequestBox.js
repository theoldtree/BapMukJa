import React from 'react';
import styled from 'styled-components/native';
import ProfileWithButton from '../../../Components/ProfileWithButton';

const Container = styled.View`
  border-bottom: 1px;
  border-color: black;
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: black;
  padding: 10px;
`;

const RequestList = styled.FlatList``;

export default function RequestBox({title, requestlist}) {
  const renderItem = ({item}) => {
    return <ProfileWithButton text={'수락'} name={item.name} />;
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RequestList
        data={requestlist}
        renderItem={renderItem}
        keyExtrator={requestlist.id}
      />
    </Container>
  );
}
