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
import { Category, Categories } from "../components";
import { genres } from "../constants/Genres";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CategoriesStack = createStackNavigator();

const TabScreen: React.FC = () => {
  const { colors, darkTheme, showTabBar } = useAppContext();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { height: 70, backgroundColor: colors.deep },
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
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="explore"
              color={focused ? colors.text : "grey"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="ios-settings"
              color={focused ? colors.text : "grey"}
              size={34}
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

const CategoriesStackScreen: React.FC = () => {
  return (
    <CategoriesStack.Navigator headerMode="none">
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen name="Movie" component={DetailsScreen} />
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
        backgroundColor={colors.background}
        barStyle={darkTheme ? "light-content" : "dark-content"}
      />
      <TabScreen />
    </NavigationContainer>
  );
};

export default MainNavigator;
