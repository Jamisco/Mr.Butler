import React from "react";
import { StyleSheet, View } from "react-native";

import MainButton from "./components/MainButton";
import MainTextInput from "./components/MainTextInput";

export default function App() {
  return (
    <View style={searchBarStyles.SupremeContainer}>
      <View style={searchBarStyles.searchBarContainer}>
        <MainTextInput
          placeholder="Search for a Stores"
          containerStyles={searchBarStyles.inputContainer}
          buttonStyles={searchBarStyles.textInput}
        />

        <MainButton
          text="Go"
          containerStyles={searchBarStyles.buttonContainer}
          buttonStyles={searchBarStyles.button}
        />
      </View>

      <View style={hotCouponStyles.mainContainer}>
        <MainButton
          text="Hot Coupons"
          containerStyles={hotCouponStyles.couponContainer}
          buttonStyles={hotCouponStyles.button}
          // onPress={() => this.props.navigation.navigate("HotCoupons")}
        />
      </View>

      <View style={popularCouponStyles.mainContainer}>
        <MainButton
          text="Popular Coupons"
          containerStyles={popularCouponStyles.couponContainer}
          buttonStyles={popularCouponStyles.button}
        />
      </View>

      <View style={seasonalCouponStyles.mainContainer}>
        <MainButton
          text="Seasonal Coupons"
          containerStyles={seasonalCouponStyles.couponContainer}
          buttonStyles={seasonalCouponStyles.button}
        />
      </View>

      <View style={bottomNavStyles.mainContainer}>
        <MainButton
          text="Box 1"
          containerStyles={bottomNavStyles.boxOneContainer}
          buttonStyles={bottomNavStyles.boxOne}
        />
      </View>
    </View>
  );
}

const searchBarStyles = StyleSheet.create({
  SupremeContainer: {
    flex: 1,
    backgroundColor: "skyblue",
    marginTop: "6%",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  searchBarContainer: {
    flexDirection: "row",
    marginTop: "20%",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "red", // enable only for debugging purposes
  },

  inputContainer: {
    width: "50%",
    marginRight: 20,
    fontSize: 20,
  },

  textInput: {
    width: "50%",
    marginRight: 10,
  },

  buttonContainer: {
    width: "10%",
  },

  button: {
    textAlignVertical: "center",
  },
});

const hotCouponStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "20%",
  },

  couponContainer: {},

  button: {
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    paddingLeft: 5,
  },
});

const popularCouponStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
  },

  couponContainer: {},

  button: {
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    paddingLeft: 5,
  },
});

const seasonalCouponStyles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "15%",
    height: "25%",
    backgroundColor: "red",
  },

  couponContainer: {
    height: "100%",
  },

  button: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "top",
    paddingTop: "5%",

    height: "100%",
  },
});

const bottomNavStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },

  boxOneContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  boxOne: {},
  // from left to right, box 1, box 2, box 3, box 4
});
