import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../constants/Layout";
import { ResponseObj } from "../types";

interface Props {
  data: ResponseObj;
  navigation?: any;
}

const Card: React.FC<Props> = ({ data, navigation }) => {
  const { title, backdrop_path } = data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Movie", { data })}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#ffffff" />
      </View>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.75,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
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

export default Card;
