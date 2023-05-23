import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ProfileWithButton from "../../../Components/ProfileWithButton";
import { SKY_BLUE_500 } from "../../../Assets/Colors/color";
import { firebase } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const Container = styled.View`
  border-bottom: 1px;
  border-color: ${SKY_BLUE_500};
  margin-bottom: 5%;
`;

const Title = styled.Text`
  color: ${SKY_BLUE_500};
  padding: 10px;
`;

const RequestList = styled.FlatList``;

export default function RequestBox({ title, requestlist, uid, userData }) {
  const userRef = firebase.firestore().collection("users");
  const onPressAccept = async (item) => {
    console.log("item", item);
    const queryRef = await userRef
      .where("phonenumber", "==", item._data.phonenumber)
      .get();
    console.log("queryRef", queryRef);
    if (!queryRef.empty) {
      for (const doc of queryRef.docs) {
        console.log("doc.id", doc.id);
        // 상대방의 친구목록 업데이트
        await firestore()
          .collection("friendList")
          .doc(doc.id)
          .collection("friend")
          .doc(uid)
          .set(userData);
        // 현재 사용자의 친구목록 업데이트
        await firestore()
          .collection("friendList")
          .doc(uid)
          .collection("friend")
          .doc(doc.id)
          .set(item._data);

        // 초대 목록에서 삭제
        await firestore()
          .collection("invitationList")
          .doc(uid)
          .collection("requestList")
          .doc(doc.id)
          .delete();
        return Alert.alert("수락완료");
      }
    } else {
      return Alert.alert("해당 유저는 더이상 존재하지 않습니다!");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <ProfileWithButton
        text={"수락"}
        item={item}
        onPress={() => onPressAccept(item)}
      />
    );
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RequestList
        data={requestlist}
        renderItem={renderItem}
        keyExtrator={requestlist.id}
      />
    </Container>
  );
}
