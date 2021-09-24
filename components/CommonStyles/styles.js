import { StyleSheet, Dimensions } from "react-native";

const { phoneHeight, phoneWeight } = Dimensions.get("window");

var CommonStyles = StyleSheet.create({
  mainSearchBar: {
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
  },

  commonContainer: {},
});

export default CommonStyles;
