import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  Platform,
  StatusBar,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories, StarRatings } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";
import { ResponseObj, Movie } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";

const MovieScreen: React.FC<StackScreenProps<{}>> = ({ navigation, route }) => {
  const data: ResponseObj = route.params.data;
  const {
    // poster_path,
    // backdrop_path,
    // title,
    // overview,
    // popularity,
    // release_date,
    // vote_average,
    // vote_count,
    // adult,
    // original_language,
    id,
  } = data;

  const [movieDetails, setMovieDetails] = useState<Movie>({});
  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    vote_count,
    genres,
    popularity,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
  } = movieDetails;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    setMovieDetails(data);
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
      <RectButton
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Ionicons name="md-arrow-round-back" size={20} color={mainColor} />
      </RectButton>
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
                <StarRatings rating={vote_average} />
                <View
                  style={{ ...styles.row, justifyContent: "space-between" }}
                >
                  <View style={{ ...styles.row }}>
                    <Text style={styles.ratingText}> {vote_average} </Text>
                    <Text style={styles.overallText}> / 10 </Text>
                  </View>
                  <Text style={styles.votesText}> {vote_count} votes</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.runtimeText}> {runtime} min | </Text>
                  <Text style={styles.runtimeText}>{status} </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.storylineContainer}>
              <Text style={styles.title}>Storyline </Text>
              <Text style={styles.storylineText}>{overview}</Text>
            </View>
            <View style={styles.genres}>
              {genres.map(({ id, name }) => (
                <View key={id} style={styles.batch}>
                  <Text style={{ color: "#ffffff" }}> {name} </Text>
                </View>
              ))}
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.icon}>
                <Fontisto name="favorite" color="#ffffff" size={16} />
              </View>
              <Text style={styles.bottomRowText}> {popularity} </Text>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.icon}>
                <Entypo name="calendar" color="#ffffff" size={14} />
              </View>
              <Text style={styles.bottomRowText}> {release_date} </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: mainColor,
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  overallText: {
    marginTop: 2,
    color: "lightslategrey",
  },
  votesText: {
    fontSize: 20,
    marginTop: 5,
    color: "#ffffff",
  },
  runtimeText: {
    fontSize: 18,
    marginTop: 5,
    color: "#8B8B97",
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
  bottomSection: {
    flex: 1,
    padding: 10,
  },
  movieDetails: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  rating: {
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 30,
    left: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    zIndex: 200,
  },
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  storylineContainer: {
    paddingVertical: 15,
  },
  storylineText: {
    fontSize: 16,
    color: "#ffffff",
  },
  bottomRow: {
    flexDirection: "row",
    marginTop: 6,
  },
  bottomRowText: {
    marginLeft: 5,
    color: "#ffffff",
  },
  icon: {
    width: 20,
    alignItems: "center",
  },
  batch: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    height: 30,
    backgroundColor: "grey",
    marginRight: 5,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default MovieScreen;