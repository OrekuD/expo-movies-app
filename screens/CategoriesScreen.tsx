import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Category, Header } from "../components";
import { mainColor } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const CategoriesScreen: React.FC<BottomTabScreenProps<{}>> = ({
  navigation,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { colors } = useAppContext();

  const genres = [
    {
      id: 28,
      name: "Action",
      component: <Category navigation={navigation} name="Action" id={28} />,
    },
    {
      id: 12,
      name: "Adventure",
      component: <Category navigation={navigation} name="Adventure" id={12} />,
    },
    {
      id: 16,
      name: "Animation",
      component: <Category navigation={navigation} name="Animation" id={16} />,
    },
    {
      id: 35,
      name: "Comedy",
      component: <Category navigation={navigation} name="Comedy" id={35} />,
    },
    {
      id: 80,
      name: "Crime",
      component: <Category navigation={navigation} name="Crime" id={80} />,
    },
    {
      id: 10751,
      name: "Family",
      component: <Category navigation={navigation} name="Family" id={10751} />,
    },
    {
      id: 14,
      name: "Fantasy",
      component: <Category navigation={navigation} name="Fantasy" id={14} />,
    },
    {
      id: 27,
      name: "Horror",
      component: <Category navigation={navigation} name="Horror" id={27} />,
    },
    {
      id: 10749,
      name: "Romance",
      component: <Category navigation={navigation} name="Romance" id={10749} />,
    },
    {
      id: 878,
      name: "Science Fiction",
      component: (
        <Category navigation={navigation} name="Science Fiction" id={878} />
      ),
    },
  ];

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <FlatList
        ListHeaderComponent={() => (
          <Header text="Browse" navigation={navigation} />
        )}
        data={[""]}
        keyExtractor={() => Math.random().toString()}
        renderItem={() => (
          <View style={styles.categories}>
            {genres.map(({ name, id }, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelectedIndex(index)}
                key={id}
                style={[
                  styles.listContainer,
                  index === selectedIndex ? styles.selected : null,
                ]}
              >
                <Text
                  style={{
                    ...styles.listText,
                    color: index === selectedIndex ? mainColor : colors.text,
                    fontWeight: index === selectedIndex ? "bold" : "100",
                  }}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        ListFooterComponent={genres[selectedIndex].component}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 20,
  },
  categories: {
    flexDirection: "row",
    marginTop: 30,
    overflow: "scroll",
    flexWrap: "wrap",
    marginLeft: 20,
  },
  listContainer: {
    marginRight: 15,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: "grey",
  },
  listText: {
    fontSize: 16,
  },
});

export default CategoriesScreen;
