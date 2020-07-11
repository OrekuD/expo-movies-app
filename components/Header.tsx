import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

const Header: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> MovieApp </Text>
      <BorderlessButton
        onPress={() => navigation.navigate("Search")}
        style={styles.searchButton}
      >
        <Ionicons name="ios-search" color="#ffffff" size={28} />
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 100,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    color: "#ffffff",
    fontFamily: "Alegreya",
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
