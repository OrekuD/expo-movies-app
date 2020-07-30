import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  HomeScreen,
  SearchScreen,
  DetailsScreen,
  SettingsScreen,
  CategoriesScreen,
} from "../screens";
import PopularTv from "../screens/PopularTv";
import TopRatedTv from "../screens/TopRatedTv";
import { StatusBar } from "react-native";
import { mainColor } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { Category, Categories } from "../components";
import { genres } from "../constants/Genres";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();
const Tv = createMaterialTopTabNavigator();

const TabScreen: React.FC = () => {
  const { colors, darkTheme, showTabBar } = useAppContext();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { height: 70, backgroundColor: colors.deep },
        keyboardHidesTabBar: true,
      }}
      screenOptions={{ tabBarVisible: showTabBar }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="dashboard"
              color={focused ? colors.text : "grey"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="movie-roll"
              color={focused ? colors.text : "grey"}
              size={30}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Tv"
        component={TvNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="tv"
              color={focused ? colors.text : "grey"}
              size={28}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-settings"
              color={focused ? colors.text : "grey"}
              size={32}
            />
          ),
        }}
      />
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

const TvNavigator: React.FC = () => {
  return (
    <Tv.Navigator>
      <Tv.Screen name="Popular" component={PopularTv} />
      <Tv.Screen name="TopRated" component={TopRatedTv} />
    </Tv.Navigator>
  );
};

const CategoriesStackScreen: React.FC = () => {
  return (
    <CategoriesStack.Navigator headerMode="none">
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen name="Movie" component={DetailsScreen} />
      <CategoriesStack.Screen name="Search" component={SearchStackScreen} />
    </CategoriesStack.Navigator>
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
        backgroundColor="transparent"
        barStyle={darkTheme ? "light-content" : "dark-content"}
        translucent
      />
      <TabScreen />
    </NavigationContainer>
  );
};

export default MainNavigator;
