import React from "react";
import { StyleSheet, View } from "react-native";

import MainButton from "../components/MainButton";

export default function HotCouponscreen({ navigation }) {
  return (
    <View style={hotCouponStyles.mainContainer}>
      <MainButton
        text="Hot Coupons"
        containerStyles={hotCouponStyles.couponContainer}
        buttonStyles={hotCouponStyles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

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
