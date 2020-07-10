import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { dummy } from "../dummy-data";
import { CategoryCard } from "../components";
import { ResponseObj } from "../types";

const SearchScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const [searchTerm, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<ResponseObj>>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(true);

  const searchForMovies = async () => {
    setSearchResults([]);
    setIsSearching(true);
    if (searchTerm.trim().length === 0) {
      return;
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=005d6a62314e432e6fe64e784f23f799&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );
      const data = await response.json();
      if (data.results.length === 0) {
        setNoResults(true);
        setIsSearching(false);
      } else {
        setSearchResults(data.results);
        setIsSearching(false);
      }
    } catch (error) {
      Alert.alert("Slow network", "Check your network and try again");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        returnKeyType="search"
        placeholder="Search for movies..."
        value={searchTerm}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={searchForMovies}
        autoFocus
      />
      {isSearching && searchResults.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <View style={styles.searchResults}>
          {noResults ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.text}> No movies found </Text>
            </View>
          ) : (
            <>
              <Text style={styles.text}>
                {"  "}
                Search results for{" "}
                <Text style={{ fontWeight: "bold" }}>{searchTerm} </Text>
              </Text>
              <FlatList
                data={searchResults}
                renderItem={({ item }) => {
                  if (item.poster_path) {
                    <CategoryCard data={item} navigation={navigation} />;
                  }
                }}
                numColumns={2}
                columnWrapperStyle={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => <View style={{ height: 120 }} />}
              />
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 40,
  },
  textInput: {
    width: width * 0.95,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    fontSize: 16,
    paddingLeft: 20,
    alignSelf: "center",
    color: "#ffffff",
  },
  searchResults: {
    paddingTop: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: width * 0.025,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
  },
});

export default SearchScreen;
