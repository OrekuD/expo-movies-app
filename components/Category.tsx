import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { dummy } from "../dummy-data";
import CategoryCard from "./CategoryCard";
import { width } from "../constants/Layout";

interface Props {
  name?: string;
  navigation?: any;
  id: number;
}

const Category: React.FC<Props> = ({ name, navigation, id }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <CategoryCard data={item} navigation={navigation} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default Category;
