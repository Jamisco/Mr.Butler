import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function MainButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyles}>
      <View>
        <Text style={styles.buttonStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
