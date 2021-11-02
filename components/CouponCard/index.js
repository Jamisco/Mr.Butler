import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CouponCard({
  couponText,
  couponPrice,
  couponImage,
  }) {
    
    const navigation = useNavigation();
    var textFontSize = 20;
    
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Coupon Details", {
          couponText: couponText,
          couponPrice: couponPrice,
          couponImage: couponImage,
      })}
      style={styles.containerStyles}
    >
      <Text
        style={styles.textStyles}
        allowFontScaling={true}
        fontSize={textFontSize}
      >
        {couponText}
      </Text>

      <Image style={styles.imageStyle} source={couponImage}>

      </Image>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    height: 150, // dont use percentage height with flatlist, flatlist technically dont have a true height value
    width: "42.5%", // this is so we have spaces imbetweens the boxes
    marginVertical: 5,
    marginLeft: "5%",
    backgroundColor: "red",
  },

  textStyles: {
    textAlign: "center",
    paddingTop: "5%",
  },

  imageStyle: {
    width: "60%",
    height: undefined, // yes we need this, why? Idk
    aspectRatio: 1,
    bottom: 0,
    position: "absolute",
    // use background color to see how diff resize mode and affect how the pictures are rendered
  },
});