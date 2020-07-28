import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  SearchScreen,
  DetailsScreen,
  SettingsScreen,
  CategoriesScreen,
} from "../screens";
import { StatusBar } from "react-native";
import { mainColor } from "../constants/Colors";
import { useAppContext } from "../context/Context";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const SearchStackScreen: React.FC = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Movie" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
};

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Movie" component={DetailsScreen} />
      <HomeStack.Screen name="Search" component={SearchStackScreen} />
    </HomeStack.Navigator>
  );
};

const MainNavigator: React.FC = () => {
  const { colors, darkTheme } = useAppContext();
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={darkTheme ? "light-content" : "dark-content"}
      />
      <TabScreen />
    </NavigationContainer>
  );
};

export default MainNavigator;
