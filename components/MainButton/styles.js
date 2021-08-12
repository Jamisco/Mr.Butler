import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const phoneWeight = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.3, //30%
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    width: phoneWeight * 0.75,
    height: 40,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default styles;
