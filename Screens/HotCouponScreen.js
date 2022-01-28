import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import CouponLoader from "../components/CouponLoader";
import DetergentInfo from "../Test-Data/FD-DetergentInfo";

// The coupon itself is not a component. The coupon is merely an object with text and image properties etc
// The coupon object is the js file itself. The file that contains the title, price and images
// Hence it is nessacry we seperate the coupon screens from each in the future, but for now, one file will do

// Then we shall have multiple components that can take that coupon object(file) and display its properties accordingly

// the couponLoader merely serves are a versatile resource to load coupons across many screens
//     Notable the hotcouponscreens, popularcouponscreen etc


export default function HotCouponscreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <CouponLoader
        couponsToLoad = {DetergentInfo.slice(0, 15)} />
      
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
