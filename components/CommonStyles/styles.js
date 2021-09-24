import { StyleSheet, Dimensions } from "react-native";

const { phoneHeight, phoneWeight } = Dimensions.get("window");

var commonStyles = StyleSheet.create({
  commonButtons: {
    backgroundColor: "white",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
  },

  commonContainer: {},
});

export default commonStyles;
