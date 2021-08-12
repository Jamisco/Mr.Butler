import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function MainButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
