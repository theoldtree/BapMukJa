import React from "react";
import styled from "styled-components/native";
import { SKY_BLUE_500 } from "../Assets/Colors/color";

export const TextInputBox = styled.TextInput`
  align-self: center;
  width: 92%;
  height: 60px;
  border-width: 1px;
  margin-top: 4%;
  margin-bottom: 2%;
  border-radius: 2px;
  padding-left: 3%;
  border-color: ${SKY_BLUE_500};
`;
