import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories } from "../components";
import { dummy } from "../dummy-data";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.row}>
          <FlatList
            horizontal
            data={dummy}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card data={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Categories />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColor,
    flex: 1,
  },
  row: {
    marginHorizontal: 10,
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default HomeScreen;
