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
});

const Provider = ({ children }: ProviderProps) => {
  const [darkTheme, setTheme] = useState<boolean>(false);
  const [colors, setColors] = useState<Colors>(light);

  const toggleTheme = () => {
    setTheme(!darkTheme);
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
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useAppContext = () => useContext(Context);

export default Provider;
