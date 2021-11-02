import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CouponCard from "../CouponCard";

export default function CouponLoader({
  couponsToLoad,
  flatlistContainer,
}) {
  return (
    <FlatList
      style={flatlistContainer}
      data={couponsToLoad}
      renderItem={({ item, index }) => (
        <CouponCard
          couponText = {item.Title} // make sure the data property you pass has a text property
          couponPrice = {item.Price}
          couponImage = {item.Image}
        />
      )}
      horizontal={false}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    alignContent: "space-between",
  },

  couponContainer: {
    height: 150, // dont use percentage height with flatlist, flatlist technically dont have a true height value
    width: "42.5%",
    marginVertical: 5,
    marginLeft: "5%",
    backgroundColor: "skyblue",
  },

  coupon: {
    //fontSize: 20,
  },

  button: {
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    paddingLeft: 5,
  },
});
