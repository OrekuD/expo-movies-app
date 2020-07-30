import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { mainColor } from "../constants/Colors";
import { TvShow, Movie } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { ResponseObj, TvResponse } from "../types";
import { MOVIE_DB_API_KEY } from "../constants/Api";
import { useAppContext } from "../context/Context";

const DetailsScreen: React.FC<StackScreenProps<{}>> = ({
  navigation,
  route,
}) => {
  const data: ResponseObj | TvResponse = route.params.data;
  const { media_type, id } = data;
  const [details, setDetails] = useState<any>({});
  const { colors, toggleTabbar } = useAppContext();

  useEffect(() => {
    fetchData();
    toggleTabbar(false);

    return () => {
      toggleTabbar(true);
    };
  }, []);

  const fetchData = async () => {
    try {
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
      } else if (media_type === "tv" || !media_type) {
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
    } catch (error) {
      Alert.alert("", "");
    }
  };

  if (!details.id) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.background,
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
