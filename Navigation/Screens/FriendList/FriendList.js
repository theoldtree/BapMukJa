import React, { useEffect, useState } from "react";
import ListHeader from "../../../Components/ListHeader";
import { Container } from "../../../Components/Container";
import RequestBox from "./RequestBox";
import MultipleProfileContainer from "./MultipleProfileContainer";
import MyProfile from "./Myprofile";
import { Title } from "../../../Components/Title";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { ActivityIndicator } from "react-native";
import { GRAY_COLOR_300 } from "../../../Assets/Colors/color";
import { CenterView } from "../../../Components/CenterView";

export default function FriendList({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [uid, setUid] = useState("");
  const [requestlist, setRequestList] = useState([
    {
      name: "김철수",
      id: 1,
    },
    {
      name: "이영희",
      id: 2,
    },
    {
      name: "박민준",
      id: 3,
    },
  ]);
  const [friendlist, setFreindList] = useState([
    {
      id: 1,
      name: "김지민",
    },
    {
      id: 2,
      name: "이지은",
    },
    {
      id: 3,
      name: "박영호",
    },
    {
      id: 4,
      name: "최민수",
    },
    {
      id: 5,
      name: "홍길동",
    },
    {
      id: 6,
      name: "한예슬",
    },
  ]);
  useEffect(() => {
    async function fetchUser() {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const uid = currentUser.uid;
        const userDoc = await firestore().collection("users").doc(uid).get();
        setUserData(userDoc._data);
        setUid(uid);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  return loading ? (
    <CenterView>
      <ActivityIndicator color={GRAY_COLOR_300} />
    </CenterView>
  ) : (
    <Container>
      <ListHeader
        iconName={"adduser"}
        onPress={() =>
          navigation.navigate("FriendInvite", { userData: userData, uid: uid })
        }
      />
      <MultipleProfileContainer
        title={"친구목록"}
        list={friendlist}
        listheadercomponent={
          <>
            <MyProfile title={"나의 프로필"} profile={userData.name} />
            <RequestBox title={"친구요청"} requestlist={requestlist} />
            <Title>친구목록</Title>
          </>
        }
      />
    </Container>
  );
}
