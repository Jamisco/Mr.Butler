import { StyleSheet, Dimensions } from "react-native";
import commonStyles from "../CommonStyles/styles.js";

const { height } = Dimensions.get("window");
const phoneWeight = Dimensions.get("window").width;

const newButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: "white",
  },
});

// combine this components styles with the common styles
const buttonStyles = StyleSheet.flatten([
  newButtonStyle.button,
  commonStyles.mainSearchBar,
]);

const newContainerStyles = StyleSheet.create({
  container: {
    //no container styles for now
  },
});

// combine this components style with the common styles
const containerStyles = StyleSheet.flatten([
  newContainerStyles.container,
  commonStyles.commonContainer,
]);

export default style = StyleSheet.create({
  buttonStyles,
  containerStyles,
});
