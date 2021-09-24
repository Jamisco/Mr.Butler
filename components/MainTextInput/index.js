import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";

export default function TextBox({ placeholder }) {
  return (
    <View style={styles.containerStyles}>
      <TextInput style={styles.buttonStyles} placeholder={placeholder} />
    </View>
  );
}
