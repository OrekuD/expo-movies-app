import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { Header, Card, Categories } from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";
import { ResponseProps } from "../types";
import { AntDesign } from "@expo/vector-icons";

const starValue = (rating: number) => {
  if (rating > 9) {
    return 5;
  } else if (rating > 8) {
    return 4;
  } else if (rating > 6) {
    return 3;
  } else if (rating > 4) {
    return 2;
  } else {
    return 1;
  }
};

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
  } = data;
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
                <AntDesign name="star" color="gold" size={20} />
                <Text style={styles.vote_count}>{vote_count}</Text>
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
    backgroundColor: mainColor,
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
    backgroundColor: "#ffffff",
  },
  topSection: {
    flexDirection: "row",
    height: 150,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  movieDetails: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default MovieScreen;
