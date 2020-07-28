import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { width } from "../constants/Layout";
import { ResponseObj } from "../types";
import StarRatings from "./StarRatings";
import { useAppContext } from "../context/Context";

interface Props {
  data: ResponseObj;
  navigation?: any;
}

const CategoryCard: React.FC<Props> = ({ data, navigation }) => {
  const { colors } = useAppContext();
  const { poster_path, title, vote_average, original_name } = data;
  return (
    <View style={{ ...styles.container, backgroundColor: colors.deep }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Movie", { data })}
        style={styles.imageContainer}
        activeOpacity={0.7}
      >
        {poster_path ? (
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text> No image </Text>
          </View>
        )}
        <View style={styles.content}>
          <View style={styles.textContainer}>
            {title ? (
              <Text style={{ ...styles.text, color: colors.text }}>
                {title}
              </Text>
            ) : (
              <Text style={{ ...styles.text, color: colors.text }}>
                {original_name}
              </Text>
            )}
          </View>
          <StarRatings rating={vote_average} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: width * 0.45 * 1.5 + 85,
    borderRadius: 5,
    marginBottom: (width * 0.1) / 3,
    elevation: 1,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: width * 0.45 * 1.5,
  },
  content: {
    marginVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  image: {
    height: "100%",
    width: "100%",
    zIndex: 10,
  },
  loadingContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    maxHeight: 45,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryCard;
