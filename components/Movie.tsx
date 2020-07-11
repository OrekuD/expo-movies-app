import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { mainColor } from "../constants/Colors";
import StarRatings from "./StarRatings";
import { height, width } from "../constants/Layout";
import { MovieProps } from "../types";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";

interface Props {
  data: MovieProps;
  navigation: any;
}

const Movie: React.FC<Props> = ({ data, navigation }) => {
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
    original_name,
  } = data;
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
          {backdrop_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
              }}
              style={styles.backdrop_image}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{
                ...styles.backdrop_image,
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text> No image </Text>
            </View>
          )}
          <View style={styles.overlay} />
        </View>
        <View style={styles.content}>
          <View style={styles.topSection}>
            {poster_path ? (
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                }}
                style={styles.poster_image}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  ...styles.poster_image,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <Text> No image </Text>
              </View>
            )}
            <View style={styles.details}>
              {title ? (
                <Text style={styles.title}>{title}</Text>
              ) : (
                <Text style={styles.title}>{original_name}</Text>
              )}
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
    height: height * 0.3,
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
  details: {
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

export default Movie;
