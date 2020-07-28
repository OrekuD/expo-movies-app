import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { height } from "../constants/Layout";
import { useAppContext } from "../context/Context";
import { MOVIE_DB_API_KEY } from "../constants/Api";
import { TvResponse } from "../types";
import { getGenres } from "../util/getGenres";

interface AiringTodayProps {
  navigation: any;
  data: Array<TvResponse>;
}

const AiringToday = ({ navigation, data }: AiringTodayProps) => {
  const { colors } = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: colors.text }}>
        Airing on TV today
      </Text>
      <FlatList
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => {
          const { poster_path, name, genre_ids, vote_average } = item;
          const genres = getGenres(genre_ids);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Movie", {
                  data: { ...item, media_type: "tv" },
                })
              }
              activeOpacity={0.8}
              style={styles.card}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                }}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.content}>
                <Text style={{ ...styles.cardText, color: colors.text }}>
                  {name}
                </Text>
                <View style={styles.row}>
                  {genres.map((genre) => (
                    <View key={genre} style={styles.badge}>
                      <Text style={{ color: "#ffffff" }}> {genre} </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.row}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: colors.text,
                      fontWeight: "bold",
                    }}
                  >
                    {vote_average}
                  </Text>
                  <Text style={{ fontSize: 16, color: "grey" }}> /10</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AiringToday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    height: 120,
    marginBottom: 20,
    flexDirection: "row",
  },
  image: {
    width: 120 * 0.667,
    height: "100%",
  },
  content: {
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
    flexWrap: "wrap",
    alignItems: "center",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "grey",
    marginRight: 5,
    marginBottom: 5,
  },
});
