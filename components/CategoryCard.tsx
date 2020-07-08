import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  data: {};
  navigation?: any;
}

const CategoryCard: React.FC<Props> = ({ data, navigation }) => {
  return (
    <RectButton
      onPress={() => navigation.navigate("Movie", data)}
      style={styles.container}
    >
      <Text style={{ color: "#ffffff" }}> Okay </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: width * 0.45,
    height: width * 0.7,
    borderRadius: 5,
    marginBottom: (width * 0.1) / 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryCard;
