import React from "react";
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
import { TvShowProps } from "../types";
import { RectButton } from "react-native-gesture-handler";
import {
  Ionicons,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useAppContext } from "../context/Context";

interface Props {
  data: TvShowProps;
  navigation: any;
}

const TvShow: React.FC<Props> = ({ data, navigation }) => {
  const { colors } = useAppContext();
  const {
    name,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    vote_count,
    genres,
    popularity,
    status,
    original_name,
    number_of_seasons,
    first_air_date,
  } = data;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <RectButton
        onPress={() => navigation.goBack()}
        style={{ ...styles.closeButton, backgroundColor: colors.background }}
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={colors.text}
        />
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
                backgroundColor: colors.background,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: colors.text }}> No image </Text>
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
                  backgroundColor: colors.background,
                }}
              >
                <Text style={{ color: colors.text }}> No image </Text>
              </View>
            )}
            <View style={styles.details}>
              {name ? (
                <Text style={{ ...styles.name, color: colors.text }}>
                  {name}
                </Text>
              ) : (
                <Text style={{ ...styles.name, color: colors.text }}>
                  {original_name}
                </Text>
              )}
              <View style={styles.rating}>
                <StarRatings rating={vote_average} />
                <View
                  style={{ ...styles.row, justifyContent: "space-between" }}
                >
                  <View style={{ ...styles.row }}>
                    <Text style={{ ...styles.ratingText, color: colors.text }}>
                      {" "}
                      {vote_average}{" "}
                    </Text>
                    <Text style={styles.overallText}> / 10 </Text>
                  </View>
                  <Text style={styles.votesText}> {vote_count} votes</Text>
                </View>
                <View style={{ ...styles.row, flexWrap: "wrap" }}>
                  <Text style={{ ...styles.runtimeText, color: colors.text }}>
                    Tv Show |{" "}
                  </Text>
                  <Text style={{ ...styles.runtimeText, color: colors.text }}>
                    {number_of_seasons} seasons |{" "}
                  </Text>
                  <Text style={{ ...styles.runtimeText, color: colors.text }}>
                    {status}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.storylineContainer}>
              <Text style={{ ...styles.name, color: colors.text }}>
                Storyline{" "}
              </Text>
              <Text style={{ ...styles.storylineText, color: colors.text }}>
                {overview}
              </Text>
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
                <Fontisto name="favorite" color={colors.text} size={16} />
              </View>
              <Text style={{ ...styles.bottomRowText, color: colors.text }}>
                {" "}
                {popularity}{" "}
              </Text>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.icon}>
                <Entypo name="calendar" color={colors.text} size={14} />
              </View>
              <Text style={{ ...styles.bottomRowText, color: colors.text }}>
                {" "}
                {first_air_date}{" "}
              </Text>
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
  details: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
  },
  name: {
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "grey",
    marginRight: 5,
    marginBottom: 5,
  },
});

export default TvShow;
