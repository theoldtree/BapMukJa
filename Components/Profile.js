import React from "react";
import styled from "styled-components/native";
import { SKY_BLUE_400, SKY_BLUE_500 } from "../Assets/Colors/color";

export const ProfileView = styled.TouchableOpacity`
  border-width: 1px;
  width: ${(props) => props.width};
  height: 65px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding: 2%;
  border-radius: 2px;
  border-color: ${SKY_BLUE_500};
`;

export const ProfileText = styled.Text`
  color: black;
`;

export default function Profile({ name, width }) {
  return (
    <ProfileView width={width}>
      <ProfileText>{name}</ProfileText>
    </ProfileView>
  );
}
