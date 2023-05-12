import React, { useState } from "react";
import BackHeader from "../../../Components/BackHeader";
import { Container } from "../../../Components/Container";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { TextInputBox } from "../../../Components/TextInputBox";
import { Alert } from "react-native";
import { firebase } from "@react-native-firebase/firestore";

export default function FriendInvite({ navigation }) {
  const [phonenumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState({});
  const [uid, setUid] = useState();
  const [isSearched, setIsSearched] = useState(false);

  const onSubmitEditing = async () => {
    try {
      const userRef = firebase.firestore().collection("users");
      const queryRef = await userRef
        .where("phonenumber", "==", phonenumber)
        .get();
      if (!queryRef.empty) {
        setUser(queryRef.docs);
        queryRef.forEach((doc) => {
          setUid(doc.id);
        });
        setIsSearched(true);
        await console.log(uid, user);
      } else {
        return Alert.alert("검색된 번호가 없습니다!");
      }
      // uid 값을 통하여 collection(freindlist)에 저장 -> 이때 '나'의 uid값과 이름을 보냄
      // 검색된 친구가 있을경우 textinput아래에 뜨도록 표시
    } catch (error) {}
  };
  return (
    <Container>
      <BackHeader
        title={"친구초대"}
        onPress={() => navigation.navigate("Home", { screen: "FriendList" })}
      />
      <TextInputBox
        placeholder="전화번호 검색"
        maxLength={40}
        keyboardType="number-pad"
        onSubmitEditing={onSubmitEditing}
        returnKeyLabel="완료"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      {isSearched ? (
        <ProfileWithButton name={user[0]._data.name} text={"초대"} />
      ) : null}
    </Container>
  );
}
