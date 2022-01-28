import React from "react";
import { StyleSheet, View, Image } from "react-native";

import MainButton from "../components/MainButton";
import MainTextInput from "../components/MainTextInput";

import Testimages from "../Test-Data/TestImages";

export default function RegistrationScreen({ navigation }) {
  return (
    <View style={mainStyles.SupremeContainer}>

      <View style={mainStyles.imageContainer}>
         <Image style={mainStyles.imageStyle} source={Testimages.Logo1}/>
      </View>

      <View style={mainStyles.inputContainer}>
        <MainTextInput
          placeholder="Enter Your Email"
          containerStyles={mainStyles.emailContainer}
          buttonStyles={mainStyles.textInput}
        />

        <MainTextInput
          placeholder="Enter Your Password"
          containerStyles={mainStyles.passwordContainer}
          buttonStyles={mainStyles.textInput}
          isPassword={true}
        />

        <MainButton
          text="Sign Up"
          containerStyles={mainStyles.signUpContainer}
          buttonStyles={mainStyles.signUpButton}
          onPress={() => navigation.navigate("Home")}/>
      </View>

    </View>
  );
}

const mainStyles = StyleSheet.create({
  SupremeContainer: {
    flex: 1,
    backgroundColor: "skyblue",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  imageStyle: {
    width: "70%",
    height: undefined, // yes we need this, why? so that the picture scales with Width only
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },

  imageContainer: {
    //backgroundColor: "green",
    height: "40%",
  },

  inputContainer: {
    marginVertical: "15%",
  },

  emailContainer: {
    marginBottom: "10%",
    width: "80%",
    alignSelf: "center",
    fontSize: 20,
  },

  passwordContainer: {
    marginBottom: "10%",
    width: "80%",
    alignSelf: "center",
    fontSize: 20,
  },

  signUpContainer: {
    width: "60%",
    alignSelf: "center",
    fontSize: 20,
  },
  
  textInput: {
    width: "50%",
    marginRight: 10,
  },

  signUpButton: {
    textAlignVertical: "center",
  },
});
