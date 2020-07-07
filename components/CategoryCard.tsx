import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";

interface Props {
  data: {};
}

const CategoryCard: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ffffff" }}> Okay </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: width - 40,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryCard;
