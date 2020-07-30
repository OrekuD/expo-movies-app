import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PopularTvProps {}

const PopularTv = (props: PopularTvProps) => {
  return (
    <View style={styles.container}>
      <Text>PopularTv</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PopularTv;
