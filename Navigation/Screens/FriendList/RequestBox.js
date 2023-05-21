import React from "react";
import styled from "styled-components/native";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { SKY_BLUE_500 } from "../../../Assets/Colors/color";

const Container = styled.View`
  border-bottom: 1px;
  border-color: ${SKY_BLUE_500};
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: ${SKY_BLUE_500};
  padding: 10px;
`;

const RequestList = styled.FlatList``;

export default function RequestBox({ title, requestlist }) {
  const renderItem = ({ item }) => {
    return <ProfileWithButton text={"수락"} name={item._data.name} />;
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
