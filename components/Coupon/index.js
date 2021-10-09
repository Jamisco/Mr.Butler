import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Coupon({
  text,
  onPress,
  containerStyles,
  buttonStyles,
  fontSize,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.containerStyles, { ...containerStyles }]}
    >
      <Text
        style={[styles.buttonStyles, { ...buttonStyles }]}
        allowFontScaling={true}
        fontSize={fontSize}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    
  },

  buttonStyles: {
    textAlign: "center",
    paddingTop: "5%",
  },
});