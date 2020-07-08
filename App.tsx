import React from "react";
import { View, Text } from "react-native";
import { mainColor } from "./constants/Colors";
import { AppLoading } from "expo";
import MainNavigator from "./navigation/Navigator";
import { useFonts } from "@use-expo/font";

export default function App() {
  let [fontsLoaded] = useFonts({
    PTSans: require("./assets/fonts/PTSans-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
    Alegreya: require("./assets/fonts/Alegreya-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainNavigator />;
}
