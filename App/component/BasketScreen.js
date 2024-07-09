import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
          <Text style={styles.txt8}>L A M E R E I</Text>
          <Image source={Export} style={styles.images7} />
        </View>
        <Text style={styles.txt9}>Recycle Boucle Knit Cardigan Pink </Text>

        <Text style={styles.txt10}>$120</Text>
      </View>
      <View style={styles.mate}>
        <Text style={styles.txt11}>M A T E R I A L S</Text>
        <Text style={styles.txt12}>
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
      <TouchableOpacity
        onPress={() => alert("Are you sure you want to add to basket? ")}
      >
        <View style={styles.footer1}>
          <Image source={Plus} style={styles.foot1} />
          <Image source={Heart} style={styles.foot} />
          <Text style={styles.check}>ADD TO BASKET</Text>
        </View>
      </TouchableOpacity>
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
    paddingBottom: 300,
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
    left: 120,
    top: 10,
  },
  images6: {
    right: 100,
    top: 20,

    tintColor: "grey",
  },
  images7: {
    left: 150,
  },
  txt: {
    right: 70,
    color: "grey",
    fontFamily: "didot",
  },
  txt3: {
    right: 20,
    color: "grey",
    fontFamily: "didot",
  },
  txt4: {
    right: 15,
    color: "grey",
    fontFamily: "didot",
  },
  txt5: {
    left: 130,

    marginBottom: 15,
    top: 10,
    fontSize: 16,
    fontFamily: "didot",
  },
  txt6: {
    top: 30,
    right: 40,
    marginTop: 10,
    marginBottom: 15,
    color: "grey",
    fontFamily: "didot",
  },
  txt7: {
    top: 50,
    right: 220,
    color: "grey",
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "didot",
  },
  txt8: {
    right: 40,
    fontSize: 18,
    fontFamily: "didot",
  },
  txt9: {
    right: 40,
    color: "grey",
    fontSize: 16,
    fontFamily: "didot",
  },
  txt10: {
    right: 40,
    color: "brown",
    fontSize: 18,
    top: 10,
    fontFamily: "didot",
  },
  txt11: {
    left: 15,
    fontSize: 18,
    fontFamily: "didot",
  },
  txt12: {
    left: 15,
    fontSize: 15,
    color: "grey",
    lineHeight: 25,
    fontFamily: "didot",
  },

  rule: {
    height: 1,
    borderBottomColor: "rgb(224, 224, 224)",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    width: 320,
    right: 4,
  },
  mate: {
    paddingTop: 30,

    width: 300,
    height: 150,
    right: 30,
  },
  footer1: {
    paddingBottom: 40,
    backgroundColor: "black",
    height: 70,
    width: 370,

    marginBottom: 1,
    flexDirection: "row",
    top: 300,
    right: 10,
  },
  check: {
    fontFamily: "didot",
    color: "white",
    left: 20,
    top: 20,
  },
  foot: {
    tintColor: "white",
    left: 250,
    top: 20,
  },
  foot1: {
    tintColor: "white",
    left: 30,
    top: 26,
  },
});
