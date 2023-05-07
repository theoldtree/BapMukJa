import React from "react";
import styled from "styled-components/native";
import Profile from "./Profile";
import { SKY_BLUE_500 } from "../Assets/Colors/color";

const Container = styled.View`
  border-bottom: 1px;
  border-color: ${SKY_BLUE_500};
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: ${SKY_BLUE_500};
  padding: 10px;
`;

export default function ProfileContainer({ title, profile }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Profile name={profile.name} width={"92%"} />
    </Container>
  );
}
