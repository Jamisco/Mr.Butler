import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  LogBox,
} from "react-native";

import MainButton from "./components/MainButton";

LogBox.ignoreLogs(["Setting a timer"]);

/// ALL THIS CODE is to ignore some stupid warning, more info found here https://github.com/facebook/react-native/issues/12981

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

export default function App() {
  return (
    <View style={styles.container}>
      <MainButton text="Place content here" onPress={GetData} />
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
    flex: 1,
    backgroundColor: "skyblue",
    width: "100%",
    padding: 20,
  },
});
