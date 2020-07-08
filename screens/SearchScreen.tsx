import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import { mainColor } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { width } from "../constants/Layout";
import { dummy } from "../dummy-data";
import { CategoryCard } from "../components";

const SearchScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const [searchTerm, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchForMovies = () => {
    if (searchTerm.trim().length === 0) {
      console.log("dfgh");
      return;
    }
    console.log(searchTerm);
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
      />
      {dummy.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <View style={styles.searchResults}>
          <Text style={styles.text}> Search results </Text>
          <FlatList
            data={dummy}
            renderItem={({ item }) => (
              <CategoryCard data={item} navigation={navigation} />
            )}
            numColumns={2}
            columnWrapperStyle={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{ height: 120 }} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
    paddingTop: 20,
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
