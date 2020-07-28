import * as React from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { useAppContext } from "../context/Context";
import { Header } from "../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { width } from "../constants/Layout";

const SettingsScreen = ({ navigation }: BottomTabScreenProps<{}>) => {
  const { colors, toggleTheme, darkTheme } = useAppContext();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header navigation={navigation} text="Settings" noIcon />
      <View style={styles.content}>
        <View style={{ ...styles.card, backgroundColor: colors.deep }}>
          <Text style={{ ...styles.cardText, color: colors.text }}>
            Dark theme
          </Text>
          <Switch value={darkTheme} onValueChange={toggleTheme} />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  card: {
    width: width * 0.95,
    height: 55,
    borderRadius: 5,
    elevation: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 18,
  },
});
