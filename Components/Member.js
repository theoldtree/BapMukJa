import React from "react";
import styled from "styled-components/native";
import { SKY_BLUE_500 } from "../Assets/Colors/color";

const MemberNameText = styled.Text`
  color: ${SKY_BLUE_500};
`;

const MemberlistView = styled.View`
  margin-left: 15px;
  flex-direction: row;
  margin-bottom: 2%;
  align-items: center;
`;

const MemberList = styled.FlatList``;

export default function Member({ data, keyExtrator }) {
  const renderItem = ({ item }) => {
    return <MemberNameText>{item.name} </MemberNameText>;
  };

  return (
    <MemberlistView>
      <MemberList
        horizontal
        data={data}
        keyExtrator={keyExtrator}
        renderItem={renderItem}
      />
    </MemberlistView>
  );
}
