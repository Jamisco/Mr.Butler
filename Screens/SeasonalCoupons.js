import React from "react";
import { StyleSheet, View } from "react-native";

import CouponLoader from "../components/CouponLoader";

export default function PopularCouponscreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>

    <CouponLoader
        flatlistContainer={styles.flatlistContainer}
        buttonStyle={styles.coupon}
        couponContainerStyles={styles.couponContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },

  flatlistContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "skyblue",
    alignContent: "space-between",
  },

  couponContainer: {
    height: 150, // dont use percentage height with flatlist, flatlist technically dont have a true height value
    width: "42.5%",
    marginVertical: 5,
    marginLeft: "5%",
    backgroundColor: "red",
  },

  coupon: {
    fontSize: 20,
  },
});
