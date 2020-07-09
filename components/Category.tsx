import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { dummy } from "../dummy-data";
import CategoryCard from "./CategoryCard";
import { width } from "../constants/Layout";
import { ResponseProps } from "../types";

interface Props {
  name?: string;
  navigation?: any;
  id: number;
}

const Category: React.FC<Props> = ({ name, navigation, id }) => {
  const [data, setData] = useState<Array<ResponseProps>>([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=005d6a62314e432e6fe64e784f23f799&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=${id}`
    );
    const data = await response.json();
    setData(data.results);
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
