import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";

const MovieScreen: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text> Movie </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: mainColor,
  },
  container: {
    flex: 1,
  },
});

export default MovieScreen;
