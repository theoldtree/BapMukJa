import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../../Components/Container";
import { TextInputBox } from "../../../Components/TextInputBox";
import BackHeader from "../../../Components/BackHeader";
import CustomButton from "../../../Components/CutsomButton";
import { GRAY_COLOR_200 } from "../../../Assets/Colors/color";
import { BottomContentsContainer } from "../../../Components/BottomContentsContainer";
import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import ProfileWithButton from "../../../Components/ProfileWithButton";

export default function GroupInvite({ navigation }) {
  const [groupName, setGroupName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchedUserData, setSearchedUsderData] = useState({});
  const [searchedUserID, setSearchedUserID] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [groupInfo, setGroupInfo] = useState({});
  const groupNameInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const onSubmitGroupName = () => {
    phoneNumberInputRef.current.focus();
  };
  const onSubmitPhoneNumber = async () => {
    console.log(phoneNumber);
    try {
      const loginuserid = firebase.auth().currentUser.uid;
      console.log(loginuserid);
      const friendRef = firebase
        .firestore()
        .collection("friendList")
        .doc(loginuserid)
        .collection("friend");
      const queryRef = await friendRef
        .where("phonenumber", "==", phoneNumber)
        .get();
      if (!queryRef.empty) {
        queryRef.forEach((doc) => {
          setSearchedUserID(doc.id);
          setSearchedUsderData(doc);
        });
        setIsSearched(true);
      } else {
        return Alert.alert("친구 목록에서 검색된 번호가 없습니다!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onPressCreate = () => {};
  const onPressInvite = () => {};
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
        onChangeText={(text) => setGroupName(text)}
      />
      <TextInputBox
        placeholder="전화번호 검색"
        maxLength={40}
        ref={phoneNumberInputRef}
        onSubmitEditing={onSubmitPhoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="number-pad"
        returnKeyLabel="완료"
      />
      {isSearched ? (
        <ProfileWithButton
          item={searchedUserData}
          text={"초대"}
          onPress={onPressInvite}
        />
      ) : null}
      <BottomContentsContainer>
        <CustomButton
          text={"생성하기"}
          backgroundcolor={GRAY_COLOR_200}
          bordercolor={GRAY_COLOR_200}
          textcolor={"white"}
          onPress={onPressCreate}
          // onPress={() => navigation.navigate("Home", { screen: "GroupInvite" })}
        />
      </BottomContentsContainer>
    </Container>
  );
}
