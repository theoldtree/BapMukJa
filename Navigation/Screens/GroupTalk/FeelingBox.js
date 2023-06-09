import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { SKY_BLUE_500 } from "../../../Assets/Colors/color";

const Conatiner = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const FeelingText = styled.Text`
  margin-left: 8px;
  padding: 0px;
  color: ${SKY_BLUE_500};
  font-size: 15px;
`;

export default function FeelingBox({ name, color, num }) {
  return (
    <Conatiner>
      <Ionicons name={name} size={24} color={color} />
      <FeelingText>{num}</FeelingText>
    </Conatiner>
  );
}
