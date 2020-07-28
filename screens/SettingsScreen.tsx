import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SettingsScreenProps {}

const SettingsScreen = (props: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {},
});
