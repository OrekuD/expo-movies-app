import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { ResponseObj } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";

const HomeScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const [data, setData] = useState<Array<ResponseObj>>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIE_DB_API_KEY}`,
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          // Pragma: "no-cache",
          // Expires: 0,
          // cache: "no-store",
        },
      }
    );
    const data = await response.json();
    setData(data.results);
  };

  const header = () => (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card data={item} navigation={navigation} />}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
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
    borderRadius: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#ffffff",
    marginBottom: 20,
  },
});

export default HomeScreen;
