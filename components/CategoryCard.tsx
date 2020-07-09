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
import { RectButton } from "react-native-gesture-handler";
import { ResponseProps } from "../types";

interface Props {
  data: ResponseProps;
  navigation?: any;
}

const CategoryCard: React.FC<Props> = ({ data, navigation }) => {
  const { poster_path } = data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Movie", { data })}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: width * 0.7,
    borderRadius: 5,
    marginBottom: (width * 0.1) / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 10,
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
  text: {
    position: "absolute",
    zIndex: 100,
    color: "#ffffff",
    bottom: 10,
    right: 10,
    fontSize: 24,
    width: "80%",
    textAlign: "right",
    fontWeight: "bold",
  },
});

export default CategoryCard;
