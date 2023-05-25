import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../../Components/Container";
import { TextInputBox } from "../../../Components/TextInputBox";
import BackHeader from "../../../Components/BackHeader";
import CustomButton from "../../../Components/CutsomButton";
import { GRAY_COLOR_200 } from "../../../Assets/Colors/color";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";

export default function GroupInvite({ navigation }) {
  useEffect(() => {
    console.log("groupName", groupName);
    console.log("phoneNumber", phoneNumber);
  }, [groupName, phoneNumber]);

  const [groupName, setGroupName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const groupNameInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const onSubmitGroupName = () => {
    phoneNumberInputRef.current.focus();
    setGroupName(phoneNumberInputRef.current.value);
  };
  const onSubmitPhoneNumber = async () => {
    setPhoneNumber(phoneNumberInputRef.current.value);
  };

  return (
    <Container>
      <BackHeader
        title={"그룹초대"}
        onPress={() => navigation.navigate("Home", { screen: "GroupInvite" })}
      />
      <TextInputBox
        placeholder="그룹 이름 설정"
        maxLength={40}
        ref={groupNameInputRef}
        onSubmitEditing={onSubmitGroupName}
      />
      <TextInputBox
        placeholder="전화번호 검색"
        maxLength={40}
        ref={phoneNumberInputRef}
        onSubmitEditing={onSubmitPhoneNumber}
      />
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
