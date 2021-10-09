import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Coupon from "../Coupon";

var couponArray = [];

var couponData = {
  text: "",
  key: ""
}

export default function CouponLoader({
  couponData, flatlistContainer, couponContainerStyles, couponStyle,
}) {
    if (typeof(couponData) == "undefined")
    {
        loadArray();
        couponData = couponArray;
    }
    return (

    <FlatList
      style={flatlistContainer}
      data={couponData}
      renderItem={({ item, index }) => (
        <Coupon
          containerStyles={couponContainerStyles}
          buttonStyles={couponStyle}
          text={item.text} // make sure the data property you pass has a text property
        />
      )}
      horizontal={false}
      numColumns={2}
    />
  );
}

function loadArray() {
    if (couponArray.length < 100) {
      for (let index = 0; index < 100; index++) {
        var newData = Object.create(couponData);
        newData.text = "Coupon " + (index + 1);
        newData.key = index;
        couponArray.push(newData);
      }
    }
  }

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        alignContent: "space-between"
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