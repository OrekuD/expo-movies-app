import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface TopRatedTvProps {}

const TopRatedTv = (props: TopRatedTvProps) => {
  return (
    <View style={styles.container}>
      <Text>TopRatedTv</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TopRatedTv;
