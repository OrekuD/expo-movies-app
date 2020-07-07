import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  data: {};
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ffffff" }}> Okay </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: 200,
    height: 200,
    borderRadius: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
