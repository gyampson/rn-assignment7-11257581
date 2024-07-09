import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { useEffect, useState } from "react";

const dress1 = require("../assets/dress1.png");
const dress2 = require("../assets/dress2.png");
const dress3 = require("../assets/dress3.png");
const dress4 = require("../assets/dress4.png");
const dress5 = require("../assets/dress5.png");
const dress6 = require("../assets/dress6.png");
const dress7 = require("../assets/dress7.png");
const Menu = require("../assets/Menu.png");
const remove = require("../assets/remove.png");
const add_circle = require("../assets/add_circle.png");
const Filter = require("../assets/Filter.png");
const Listview = require("../assets/Listview.png");
const shoppingBag = require("../assets/shoppingBag.png");
const Logo = require("../assets/Logo.png");

const didot = require("../assets/didot.ttf");
const Search = require("../assets/Search.png");
import * as Font from "expo-font";
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Open Fashion" component={HomeScreen} />

      <Drawer.Screen name="Check Out" component={CartScreen} />
    </Drawer.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerimg}>
        <Image source={Search} style={styles.headerimg1} />
        <Image source={shoppingBag} style={styles.headerimg2} />
        <Image source={Menu} style={styles.headerimg3} />
        <Image source={Logo} style={styles.headerimg4} />
      </View>
      <View style={styles.header}>
        <Text style={[styles.font, { fontWeight: "thin" }]}>OUR STORY</Text>
        <View style={styles.img0}>
          <Image source={Listview} style={styles.img1} />
        </View>
        <View style={styles.img}>
          <Image source={Filter} style={styles.img2} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.images}>
          <Image source={dress1} style={styles.pics} />
          <Image source={dress2} />

          <View>
            <TouchableOpacity
              onPress={() => alert("Add this item to the cart")}
            >
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>Office Wear</Text>
          <Text style={styles.bold1}> Black</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress3} style={styles.pics} />
          <Image source={dress4} />
          <View>
            <TouchableOpacity
              onPress={() => alert("Add this item to the cart")}
            >
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>Church Wear</Text>
          <Text style={styles.bold1}>Lamerei</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress5} style={styles.pics} />
          <Image source={dress6} />
          <View>
            <TouchableOpacity
              onPress={() => alert("Add this item to the cart")}
            >
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>21WN</Text>
          <Text style={styles.bold1}> Lopo</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
        <View style={styles.images}>
          <Image source={dress7} style={styles.pics} />
          <Image source={dress3} />
          <View>
            <TouchableOpacity
              onPress={() => alert("Add this item to the cart")}
            >
              <Image source={add_circle} style={styles.button1} />
              <Image source={add_circle} style={styles.button2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.writes}>
          <Text style={styles.bold}>21WN</Text>
          <Text style={styles.bold1}> Lame</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.adjust3}>reversible angora cardigan</Text>
          <Text style={styles.adjust3}> reversible angora cardigan</Text>
        </View>
        <View style={styles.writes}>
          <Text style={styles.money}>$120</Text>
          <Text style={styles.money1}> $120</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 50,
  },

  images: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingLeft: 20,
  },
  pics: {
    right: 10,
  },

  writes: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingLeft: 10,
    paddingRight: 20,
  },
  header: {
    flexDirection: "row",
    paddingTop: 20,
  },
  headerimg: {
    flexDirection: "row",
  },
  headerimg1: {
    left: 270,
  },
  headerimg2: {
    left: 290,
  },
  headerimg3: {
    right: 30,
  },
  headerimg4: {
    left: 60,
  },
  img: {
    backgroundColor: "#f5f5f5",
    height: 30,
    width: 30,
    borderRadius: 30,
    left: 155,
  },
  img0: {
    backgroundColor: "#f5f5f5",
    height: 30,
    width: 30,
    borderRadius: 30,
    left: 140,
  },
  img1: {
    left: 5,
    top: 5,
  },
  img2: {
    left: 5,
    top: 5,
  },

  font: {
    fontSize: 24,
    fontWeight: "bold",
    left: 20,
    fontFamily: "didot",
  },
  button1: {
    right: 200,
    top: 190,
  },
  button2: {
    right: 25,
    top: 165,
  },
  adjust3: {
    color: "grey",
    fontFamily: "didot",
  },
  money1: {
    right: 120,
    color: "brown",
    fontFamily: "didot",
  },
  money: {
    color: "brown",
    fontFamily: "didot",
  },
  bold: {
    fontWeight: "condensed",
    fontFamily: "didot",
  },
  bold1: {
    right: 110,
    fontWeight: "condensed",
    fontFamily: "didot",
  },
});
