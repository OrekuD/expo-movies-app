import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import CategoryCard from "./CategoryCard";
import { ResponseObj } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";

interface Props {
  name?: string;
  navigation?: any;
  id: number;
}

const Category: React.FC<Props> = ({ name, navigation, id }) => {
  const [data, setData] = useState<Array<ResponseObj>>([]);
  let isActive = true;

  useEffect(() => {
    setData([]);
    fetchData();

    return () => {
      isActive = false;
    };
  }, [id]);

  const fetchData = async () => {
    try {
      if (!isActive) {
        return;
      }
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=${id}`,
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );
      const data = await response.json();
      setData(data.results);
      // console.log(data.results[0]);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
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
