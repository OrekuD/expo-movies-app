import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { dummy } from "../dummy-data";
import CategoryCard from "./CategoryCard";
import { width } from "../constants/Layout";

interface Props {
  name?: string;
}

const Category: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <FlatList
          data={dummy}
          renderItem={({ item }) => <CategoryCard data={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ height: 200 }} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  column: {
    width: width - 40,
    overflow: "hidden",
    borderRadius: 10,
  },
});

export default Category;
