import React from "react";
import { AppLoading } from "expo";
import MainNavigator from "./navigation/Navigator";
import { useFonts } from "@use-expo/font";
import Provider from "./context/Context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Alegreya: require("./assets/fonts/Alegreya-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider>
      <MainNavigator />
    </Provider>
  );
}
