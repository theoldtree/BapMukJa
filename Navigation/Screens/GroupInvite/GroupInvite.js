import React from "react";
import { Container } from "../../../Components/Container";
import { TextInputBox } from "../../../Components/TextInputBox";
import BackHeader from "../../../Components/BackHeader";
import CustomButton from "../../../Components/CutsomButton";
import { GRAY_COLOR_200 } from "../../../Assets/Colors/color";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";

export default function GroupInvite({ navigation }) {
  return (
    <Container>
      <BackHeader
        title={"그룹초대"}
        onPress={() => navigation.navigate("Home", { screen: "GroupInvite" })}
      />
      <TextInputBox placeholder="그룹 이름 설정" />
      <TextInputBox placeholder="이름(초성),전화번호 검색" />
      <BottomContentsContainer>
        <CustomButton
          text={"생성하기"}
          backgroundcolor={GRAY_COLOR_200}
          bordercolor={GRAY_COLOR_200}
          textcolor={"white"}
          onPress={() => navigation.navigate("Home", { screen: "GroupInvite" })}
        />
      </BottomContentsContainer>
    </Container>
  );
}
