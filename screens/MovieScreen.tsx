import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories, StarRatings } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";
import { ResponseProps } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";

const MovieScreen: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const data: ResponseProps = route.params.data;
  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    popularity,
    release_date,
    vote_average,
    vote_count,
    adult,
    original_language,
    id,
  } = data;

  const [movieDetails, setMovieDetails] = useState<object>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    console.log(data);
    // setMovieDetails(data);
  };

  if (!movieDetails.title) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: mainColor,
        }}
      >
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.backdrop_imageContainer}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}
            style={styles.backdrop_image}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
        </View>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
              style={styles.poster_image}
              resizeMode="cover"
            />
            <View style={styles.movieDetails}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.rating}>
                <StarRatings rating={vote_average} count={vote_count} />
              </View>
            </View>
          </View>
          <Text> {overview} </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  backdrop_imageContainer: {
    width: "100%",
    height: height > 620 ? height * 0.35 : height * 0.45,
    position: "relative",
  },
  backdrop_image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(1, 1, 1, 0.3)",
  },
  poster_image: {
    width: 24 * 6,
    height: 36 * 6,
    marginTop: -75,
  },
  content: {
    height: "100%",
  },
  topSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  movieDetails: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rating: {
    width: "100%",
  },
});

export default MovieScreen;
