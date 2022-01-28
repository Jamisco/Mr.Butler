import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";

export default function TextBox({
  placeholder,
  containerStyles,
  inputStyles,
  isPassword,
}) {
  return (
    <View style={[styles.containerStyles, { ...containerStyles }]}>
      <TextInput
        style={[styles.inputStyles, { ...inputStyles }]}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    </View>
  );
}
