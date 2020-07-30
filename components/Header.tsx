import React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { width } from "../constants/Layout";
import { Ionicons, Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";

interface Props {
  navigation: any;
  text: string;
  noIcon?: boolean;
}

const Header: React.FC<Props> = ({ navigation, text, noIcon }) => {
  const { colors } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {!noIcon && (
          <BorderlessButton
            onPress={() => navigation.navigate("Search")}
            style={styles.searchButton}
          >
            <Feather name="search" color={colors.text} size={26} />
          </BorderlessButton>
        )}
      </View>
      <View style={styles.bottom}>
        <Text style={{ ...styles.text, color: colors.text }}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 120,
    paddingHorizontal: 20,
    marginTop: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
  },
  top: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bottom: {
    flex: 1.5,
    justifyContent: "center",
  },
  text: {
    fontSize: 33,
    color: "#ffffff",
    fontWeight: "bold",
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
