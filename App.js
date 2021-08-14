import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  LogBox,
  SafeAreaView,
} from "react-native";

import MainButton from "./components/MainButton";
import MainTextInput from "./components/MainTextInput";

/// THIS CODE is to ignore some stupid warning, more info found here https://github.com/facebook/react-native/issues/12981
LogBox.ignoreLogs(["Setting a timer"]);

import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { func } from "prop-types";

<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>;

var firebaseConfig = {
  apiKey: "AIzaSyBmecfpiS4LnD8e-LusycF8g1_yS_a694w",
  authDomain: "mr-butler-v1-00001.firebaseapp.com",
  projectId: "mr-butler-v1-00001",
  storageBucket: "mr-butler-v1-00001.appspot.com",
  messagingSenderId: "177324788010",
  appId: "1:177324788010:web:bd06a40f174cf7477f3653",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

//const analytics = firebase.analytics();

const searchBarPosition = "30%";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.searchBar}>
        <MainTextInput placeholder="Search for a Store" />
        <MainButton text="Click Me" onPress={GetData} />
      </SafeAreaView>
    </View>
  );
}

GetData = () => {
  const products = [];

  firestore
    .collection("Store")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data.name);

        // console.log("The data is" + data);
      });

      if (products.length != 0) {
        products.forEach((data) => {
          console.log(data);
        });
      } else {
        console.log("No Data");
      }
    })
    .catch((error) => console.log(error));
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "skyblue",
    marginTop: 30,
  },

  searchBar: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: "10%",
    marginRight: "15%",
    // justifyContent: "center",
  },
});
