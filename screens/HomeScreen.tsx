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
import { Header, Card, AiringToday } from "../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ResponseObj, TvResponse } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";
import Carousel from "react-native-snap-carousel";
import { width } from "../constants/Layout";
import { useAppContext } from "../context/Context";

const config = {
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
};
const HomeScreen: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const [movies, setMovies] = useState<Array<ResponseObj>>([]);
  const [tv, setTv] = useState<Array<TvResponse>>([]);
  const { colors } = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseTrending = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIE_DB_API_KEY}`,
      config
    );
    const moviesData = await responseTrending.json();
    const responseTv = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1`,
      config
    );
    const tvData = await responseTv.json();
    setTv(tvData.results);
    setMovies(moviesData.results);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        data={[""]}
        ListHeaderComponent={() => (
          <Header navigation={navigation} text="Discover" />
        )}
        keyExtractor={(item) => Math.random().toString()}
        renderItem={({ item }) => (
          <View
            style={{
              height: 220,
              justifyContent: "center",
              paddingVertical: 10,
            }}
          >
            <Carousel
              data={movies}
              renderItem={({ item, index }) => (
                <Card data={item} navigation={navigation} />
              )}
              sliderWidth={width}
              itemWidth={width * 0.75}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <AiringToday data={tv} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
