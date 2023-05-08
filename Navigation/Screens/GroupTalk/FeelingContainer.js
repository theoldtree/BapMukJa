import React, { useState } from "react";
import styled from "styled-components/native";
import FeelingBox from "./FeelingBox";
import {
  RED_COLOR_300,
  SKY_BLUE_200,
  SKY_BLUE_400,
} from "../../../Assets/Colors/color";

const Conatiner = styled.View`
  margin-right: 15px;
  flex-direction: row;
`;

export default function FeelingContainer({ feeling }) {
  console.log(feeling);
  return (
    <Conatiner>
      <FeelingBox name={"heart"} color={RED_COLOR_300} num={feeling.best} />
      <FeelingBox
        name={"md-thumbs-up"}
        color={SKY_BLUE_200}
        num={feeling.good}
      />
      <FeelingBox
        name={"md-thumbs-down"}
        color={SKY_BLUE_400}
        num={feeling.bad}
      />
    </Conatiner>
  );
}
