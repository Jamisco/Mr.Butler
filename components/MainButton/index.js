import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styles from "./styles";

export default function MainButton({
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
