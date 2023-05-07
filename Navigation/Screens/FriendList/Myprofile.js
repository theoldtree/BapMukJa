import React from "react";
import ProfileContainer from "../../../Components/ProfileContainer";

export default function MyProfile({ profile }) {
  return <ProfileContainer title={"나의 프로필"} profile={profile} />;
}
