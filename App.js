import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import LoggedInNavigator from "./Navigation/Navigator/LoggedInNavigator";
import LoggedOutNavigator from "./Navigation/Navigator/LoggedOutNavigator";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return isLoggedIn ? <LoggedInNavigator /> : <LoggedOutNavigator />;
}
