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

interface AiringTodayProps {
  navigation: any;
}

const AiringToday = ({ navigation }: AiringTodayProps) => {
  const [data, setData] = useState<Array<TvResponse>>([]);
  const { colors } = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1`,
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );
      const data = await response.json();
      setData(data.results);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: colors.text }}>
        Airing on TV today
      </Text>
      <FlatList
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item: { poster_path, name } }) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.content}>
              <Text style={styles.cardText}> {name} </Text>
            </View>
          </TouchableOpacity>
        )}
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
    height: 140,
    marginBottom: 20,
    flexDirection: "row",
  },
  image: {
    width: 140 * 0.667,
    height: "100%",
  },
  content: {
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
