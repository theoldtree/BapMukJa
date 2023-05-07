import React from "react";
import styled from "styled-components/native";
import CustomButton from "./CutsomButton";
import { SKY_BLUE_100, SKY_BLUE_300 } from "../Assets/Colors/color";
import Profile from "./Profile";

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
`;

export default function ProfileWithButton({ text, name }) {
  return (
    <ProfileContainer>
      <Profile name={name} width={"82%"} />
      <CustomButton
        backgroundcolor={SKY_BLUE_300}
        bordercolor={SKY_BLUE_300}
        text={text}
        textcolor={SKY_BLUE_100}
      />
    </ProfileContainer>
  );
}
