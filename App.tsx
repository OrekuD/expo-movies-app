import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { mainColor } from "./constants/Colors";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: mainColor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#ffffff" }}> Okay </Text>
      <StatusBar />
    </View>
  );
}
