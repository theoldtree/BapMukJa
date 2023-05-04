import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInputBox } from "../../../Components/TextInputBox";
import { FontAwesome5 } from "@expo/vector-icons";

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
`;

const IconButton = styled.TouchableOpacity`
  border-width: 1px;
  margin-right: 2%;
`;

export default function InputBox() {
  return (
    <FoodSearchBoxContainer>
      <FoodSearhBox placeholder={" 맛집, 음식이름 입력"} />
      <IconButton>
        <FontAwesome5 name="plus" size={30} color="black" />
      </IconButton>
    </FoodSearchBoxContainer>
  );
}
