import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, MovieScreen, SearchScreen } from "../screens";
import { StatusBar } from "react-native";
import { mainColor } from "../constants/Colors";

const Stack = createStackNavigator();
const SearchStack = createStackNavigator();

const StackScreen: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Search" component={SearchStackScreen} />
    </Stack.Navigator>
  );
};

const SearchStackScreen: React.FC = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Movie" component={MovieScreen} />
    </SearchStack.Navigator>
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
