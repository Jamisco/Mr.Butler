import { StyleSheet, Dimensions } from "react-native";
import commonStyles from "../CommonStyles/styles.js";

const { height } = Dimensions.get("window");
const phoneWeight = Dimensions.get("window").width;

const newButtonStyle = StyleSheet.create({
  button: {
    width: phoneWeight * 0.2,
  },
});

const buttonStyles = StyleSheet.flatten([
  newButtonStyle.button,
  commonStyles.commonButtons,
]);

const newContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});

const containerStyles = StyleSheet.flatten([
  newContainerStyles.container,
  commonStyles.commonContainer,
]);

export default style = StyleSheet.create({
  buttonStyles,
  containerStyles,
});
