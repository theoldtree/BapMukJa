import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  SKY_BLUE_100,
  SKY_BLUE_400,
  SKY_BLUE_500,
} from "../../../Assets/Colors/color";

const FoodSearchBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

const FoodSearhBox = styled.TextInput`
  border-width: 1px;
  width: 88%;
  height: 60px;
  flex: 1;
  margin: 2%;
  border-radius: 2px;
  padding-left: 4%;
  border-color: ${SKY_BLUE_400};
`;

const IconButton = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 9px;
  border-color: ${SKY_BLUE_500};
  margin-right: 2%;
  background-color: ${SKY_BLUE_100};
  padding: 1%;
`;

export default function InputBox() {
  return (
    <FoodSearchBoxContainer>
      <FoodSearhBox placeholder={"  맛집, 음식이름 입력"} maxLength={60} />
      <IconButton>
        <FontAwesome5 name="plus" size={30} color={SKY_BLUE_400} />
      </IconButton>
    </FoodSearchBoxContainer>
  );
}
