import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { FontDisplay, useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "./component/HomeScreen";
import CartScreen from "./component/CartScreen";
import HomeScreen2 from "./component/HomeScreen2";
import BasketScreen from "./component/BasketScreen";

const Logo = require("./assets/Logo.png");
const Menu = require("./assets/Menu.png");
const shoppingBag = require("./assets/shoppingBag.png");
const Search = require("./assets/Search.png");
const didotFont = require("./assets/didot.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    didot: require("./assets/didot.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer style={styles.container}>
      <ScrollView>
        <BasketScreen />

        {/* <View style={styles.footer}>
          <Text style={styles.txt1}>E S T . TOTAL</Text>
          <Text style={styles.txt2}>$240</Text>
        </View>
        <TouchableOpacity
          onPress={() => alert("Are you sure you want to checkout? ")}
        >
          <View style={styles.footer1}>
            <Image source={shoppingBag} style={styles.img} />
            <Text style={styles.check}>C H E C K O U T</Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  check: {
    textAlign: "center",
    color: "white",
  },
  footer1: {
    paddingBottom: 40,
    backgroundColor: "black",
    height: 70,
    width: 400,
    borderRadius: 20,
    marginBottom: 1,
    right: 20,
  },
  footer: {
    flexDirection: "row",
    paddingTop: 650,
  },
  img: {
    tintColor: "white",
    left: 100,
    top: 20,
  },
  txt1: {
    fontSize: 20,
    left: 10,
    color: "grey",
    fontFamily: "didot",
  },
  txt2: {
    fontSize: 20,
    left: 160,
    color: "brown",
    fontFamily: "didot",
  },
  check: {
    fontFamily: "didot",
    color: "white",
    left: 150,
  },
});
