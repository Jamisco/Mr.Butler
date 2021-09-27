import React from "react";
import { StyleSheet, View } from "react-native";

import MainButton from "../components/MainButton";

export default function PopularCouponscreen({ navigation }) {
  return (
    <View style={seasonalCouponStyles.mainContainer}>
      <MainButton
        text="Seasonal Coupons"
        containerStyles={seasonalCouponStyles.couponContainer}
        buttonStyles={seasonalCouponStyles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

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
