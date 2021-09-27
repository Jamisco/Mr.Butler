import React from "react";
import { StyleSheet, View } from "react-native";

import MainButton from "../components/MainButton";

export default function PopularCouponscreen({ navigation }) {
  return (
    <View style={popularCouponStyles.mainContainer}>
      <MainButton
        text="Popular Couponss"
        containerStyles={popularCouponStyles.couponContainer}
        buttonStyles={popularCouponStyles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

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
