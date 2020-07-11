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
import {
  Header,
  Card,
  Categories,
  StarRatings,
  TvShow,
  Movie,
} from "../components";
import { dummy } from "../dummy-data";
import { StackScreenProps } from "@react-navigation/stack";
import { height, width } from "../constants/Layout";
import { ResponseObj } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";

const DetailsScreen: React.FC<StackScreenProps<{}>> = ({
  navigation,
  route,
}) => {
  const data: ResponseObj = route.params.data;
  const { media_type, id } = data;
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response;

    if (media_type === "movie" || !media_type) {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`,
        {
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
    } else if (media_type === "tv") {
      response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`,
        {
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
    }
    const data = await response?.json();
    // console.log(data);
    setDetails(data);
  };

  if (!details.id) {
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

  if (media_type === "tv") {
    return <TvShow data={details} navigation={navigation} />;
  }

  return <Movie data={details} navigation={navigation} />;
};

export default DetailsScreen;
