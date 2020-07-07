import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";
import { StatusBar } from "react-native";
import { mainColor } from "../constants/Colors";

const Stack = createStackNavigator();

const StackScreen: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={mainColor} />
      <StackScreen />
    </NavigationContainer>
  );
};

export default MainNavigator;
