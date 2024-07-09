import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const Logo = require("../assets/Logo.png");
const Menu = require("../assets/Menu.png");
const shoppingBag = require("../assets/shoppingBag.png");
const Search = require("../assets/Search.png");
const dress4 = require("../assets/dress4.png");
const tumble = require("../assets/tumble.png");
const wash = require("../assets/wash.png");
const door = require("../assets/door.png");
const bleach = require("../assets/bleach.png");
const Up = require("../assets/Up.png");
const iron = require("../assets/iron.png");
const Shipping = require("../assets/Shipping.png");
const Plus = require("../assets/Plus.png");
const Heart = require("../assets/Heart.png");
const Export = require("../assets/Export.png");
const BasketScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerimg}>
        <Image source={Search} style={styles.headerimg1} />
        <Image source={shoppingBag} style={styles.headerimg2} />
        <Image source={Menu} style={styles.headerimg3} />
        <Image source={Logo} style={styles.headerimg4} />
      </View>
      <View style={styles.image}>
        <Image source={dress4} style={styles.img} />
      </View>
      <View>
        <View style={styles.images1}>
          <Text>LAMEREI</Text>
          <Image source={Export} style={styles.images7} />
        </View>
        <Text>Recycle Boucle Knit Cardigan Pink </Text>

        <Text>Price: $120</Text>
      </View>
      <View>
        <Text>MATERIALS</Text>
        <Text>
          We work with monitoring programmes to ensure compliance with safety,
          health and quality standards for our products.
        </Text>
      </View>
      <View style={styles.images1}>
        <Image source={bleach} style={styles.images2} />
        <Text style={styles.txt}>Do not use bleach</Text>
      </View>
      <View style={styles.images1}>
        <Image source={tumble} style={styles.images2} />
        <Text style={styles.txt}>Do not tumble dry</Text>
      </View>
      <View style={styles.images1}>
        <Image source={wash} style={styles.images3} />
        <Text style={styles.txt3}>Dry clean with tetrachloroethylene</Text>
      </View>
      <View style={styles.images1}>
        <Image source={iron} style={styles.images4} />
        <Text style={styles.txt4}> Iron at a maximum of 110ºC/230ºF</Text>
      </View>
      <View style={styles.rule}></View>
      <View style={styles.images1}>
        <Image source={Shipping} style={styles.images5} />

        <Text style={styles.txt5}>Free Flat Rate Shipping</Text>
        <Text style={styles.txt6}>Estimated to be delivered on</Text>
        <Text style={styles.txt7}>09/11/2021 - 12/11/2021</Text>
        <Image source={Up} style={styles.images6} />
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  headerimg: {
    flexDirection: "row",
  },
  headerimg1: {
    left: 170,
  },
  headerimg2: {
    left: 190,
  },
  headerimg3: {
    right: 140,
  },
  headerimg4: {
    right: 30,
  },
  image: {},
  img: {
    width: 450,
    height: 450,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 20,
  },
  images: {
    flexDirection: "row",
    left: 20,
  },
  images1: {
    flexDirection: "row",

    marginTop: 10,
    marginBottom: 10,
  },
  images3: {
    right: 50,
    tintColor: "grey",
  },
  images2: {
    right: 100,
    tintColor: "grey",
  },

  images4: {
    right: 40,
    tintColor: "grey",
  },
  images5: {
    left: 100,
    top: 20,
  },
  images6: {
    right: 120,
    top: 20,

    tintColor: "grey",
  },
  txt: {
    right: 70,
    color: "grey",
  },
  txt3: {
    right: 20,
    color: "grey",
  },
  txt4: {
    right: 15,
    color: "grey",
  },
  txt5: {
    left: 110,
    marginTop: 10,
    marginBottom: 10,
    top: 10,
  },
  txt6: {
    top: 30,
    right: 33,
    marginTop: 10,
    marginBottom: 10,
    color: "grey",
  },
  txt7: {
    top: 50,
    right: 210,
    color: "grey",
    marginTop: 10,
    marginBottom: 10,
  },

  rule: {
    height: 1,
    borderBottomColor: "background: rgba(175, 176, 182, 1)",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    width: 200,
    right: 50,
  },
});
