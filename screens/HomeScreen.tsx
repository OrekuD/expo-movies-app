import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { width } from "../constants/Layout";

const HomeScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const header = () => (
    <FlatList
      horizontal
      data={dummy}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card data={item} navigation={navigation} />}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FlatList
        data={[""]}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.row}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => <View />}
        ListFooterComponent={() => <Categories navigation={navigation} />}
      />
    </View>
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
