import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Header </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 70,
    justifyContent: "center",
    paddingLeft: 20,
  },
  text: {
    fontSize: 22,
    color: "#ffffff",
    fontFamily: "Raleway",
  },
});

export default Header;
