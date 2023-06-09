import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FriendList from "../Screens/FriendList/FriendList";
import GroupList from "../Screens/GroupList/GroupList";
import FriendInvite from "../Screens/FriendInvite/FriendInvite";
import GroupInvite from "../Screens/GroupInvite/GroupInvite";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import GroupTalk from "../Screens/GroupTalk/GroupTalk";
import {
  SKY_BLUE_100,
  SKY_BLUE_200,
  SKY_BLUE_400,
} from "../../Assets/Colors/color";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: SKY_BLUE_400,
        tabBarInactiveTintColor: SKY_BLUE_100,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: SKY_BLUE_200,
        },
      }}
    >
      <Tab.Screen
        name="FriendList"
        component={FriendList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GroupList"
        component={GroupList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function LoggedInNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FriendInvite" component={FriendInvite} />
        <Stack.Screen name="GroupInvite" component={GroupInvite} />
        <Stack.Screen name="GroupTalk" component={GroupTalk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
