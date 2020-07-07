import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Category from "./Category";
import { mainColor } from "../constants/Colors";

const Categories: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const categories = [
    { id: Math.random().toString(), name: "Action", index: 0 },
    { id: Math.random().toString(), name: "Fantasy", index: 1 },
    { id: Math.random().toString(), name: "Romance", index: 2 },
  ];

  const components = [
    { component: <Category name="Action" /> },
    { component: <Category name="Fantasy" /> },
    { component: <Category name="Romance" /> },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Browse by categories </Text>
      <View style={styles.categories}>
        {categories.map(({ name, id }, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelectedIndex(index)}
            key={id}
            style={[
              styles.listContainer,
              index === selectedIndex ? styles.selected : null,
            ]}
          >
            <Text
              style={{
                ...styles.listText,
                color: index === selectedIndex ? mainColor : "#ffffff",
              }}
            >
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {components[selectedIndex].component}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    marginTop: 40,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
  },
  categories: {
    flexDirection: "row",
    marginTop: 30,
  },
  listContainer: {
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  selected: {
    backgroundColor: "#ffffff",
  },
  listText: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default Categories;
