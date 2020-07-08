import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  data: {};
  navigation?: any;
}

const Card: React.FC<Props> = ({ data, navigation }) => {
  return (
    <RectButton
      onPress={() => navigation.navigate("Movie", { data })}
      style={styles.container}
    >
      <Text style={{ color: "#ffffff" }}> Okay </Text>
    </RectButton>
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
