import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  rating: number;
  count: number;
}

const starValue = (rating: number) => {
  if (rating > 9) {
    return 5;
  } else if (rating > 8) {
    return 4;
  } else if (rating > 6) {
    return 3;
  } else if (rating > 4) {
    return 2;
  } else {
    return 1;
  }
};

const StarRatings: React.FC<Props> = ({ rating, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {starValue(rating) === 5 && (
          <>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
          </>
        )}
        {starValue(rating) === 4 && (
          <>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
          </>
        )}
        {starValue(rating) === 3 && (
          <>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
          </>
        )}
        {starValue(rating) === 2 && (
          <>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
          </>
        )}
        {starValue(rating) === 1 && (
          <>
            <View style={styles.star}>
              <AntDesign name="star" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
            <View style={styles.star}>
              <AntDesign name="staro" color="gold" size={18} />
            </View>
          </>
        )}
      </View>
      <View style={{ ...styles.row, justifyContent: "space-between" }}>
        <View style={{ ...styles.row }}>
          <Text style={styles.ratingText}> {rating} </Text>
          <Text style={styles.overallText}> / 10 </Text>
        </View>
        <Text style={styles.votesText}> {count} votes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  star: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  overallText: {
    marginTop: 2,
    color: "lightslategrey",
  },
  votesText: {
    fontSize: 20,
    marginTop: 7,
  },
});

export default StarRatings;
