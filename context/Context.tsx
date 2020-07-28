import React, { createContext, useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppContext, Colors } from "../types";
import { light, dark } from "../constants/Colors";

interface ProviderProps {
  children: React.ReactNode;
}

const Context = createContext<AppContext>({
  darkTheme: false,
  toggleTheme: () => {},
  colors: light,
  showTabBar: true,
  toggleTabbar: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [darkTheme, setTheme] = useState<boolean>(false);
  const [showTabBar, setShowTabBar] = useState<boolean>(true);
  const [colors, setColors] = useState<Colors>(light);

  const toggleTheme = () => {
    setTheme(!darkTheme);
  };

  const toggleTabbar = (state: boolean) => {
    setShowTabBar(state);
  };

  useEffect(() => {
    if (darkTheme) {
      setColors(dark);
    } else {
      setColors(light);
    }
  }, [darkTheme]);

  const state: AppContext = {
    colors,
    darkTheme,
    toggleTheme,
    toggleTabbar,
    showTabBar,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

export default Provider;
