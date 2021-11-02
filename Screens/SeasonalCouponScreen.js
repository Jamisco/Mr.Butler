import React from "react";
import { StyleSheet, View } from "react-native";

import CouponLoader from "../components/CouponLoader";
import DetergentInfo from "../Test-Data/FD-DetergentInfo";

export default function PopularCouponscreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>

      <CouponLoader couponsToLoad={DetergentInfo.slice(30, 47)} />

   </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "skyblue",
  },
});
