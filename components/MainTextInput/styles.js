import { StyleSheet, Dimensions } from "react-native";
import commonStyles from "../CommonStyles/styles";

const newTextStyle = StyleSheet.create({
  textField: {
    backgroundColor: "white",
  },
});

// combine this components properties with the common properties
const inputStyles = StyleSheet.flatten([
  newTextStyle.textField,
  commonStyles.mainSearchBar,
]);

const newContainerStyles = StyleSheet.create({
  container: {
    // no container styles for now
  },
});

// combine this components properties with the common properties
const containerStyles = StyleSheet.flatten([
  newContainerStyles.container,
  commonStyles.commonContainer,
]);

export default style = StyleSheet.create({
  inputStyles,
  containerStyles,
});
