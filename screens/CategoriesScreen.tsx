import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CategoriesScreenProps {}

const CategoriesScreen = (props: CategoriesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {},
});
