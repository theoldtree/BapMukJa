import React from "react";
import styled from "styled-components/native";
import { Container } from "../../../Components/Container";
import Profile from "../../../Components/Profile";

const ProfileList = styled.FlatList``;

export default function MultipleProfileContainer({
  list,
  listheadercomponent,
}) {
  const renderItem = ({ item }) => {
    return <Profile name={item.name} width={"92%"} />;
  };

  return (
    <Container>
      <ProfileList
        ListHeaderComponent={listheadercomponent}
        data={list}
        renderItem={renderItem}
        keyExtrator={(list) => list.id}
      />
    </Container>
  );
}
