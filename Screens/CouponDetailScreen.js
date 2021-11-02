import React from "react";
import { Image, StyleSheet, View, FlatList, Text} from "react-native";

// now fix this so its a proper screen. The images fit nicely and the data is displayed in the bottom
export default function CouponScreen({ route, navigation }) {

  const { couponText } = route.params;
  const { couponPrice } = route.params;
  const { couponImage } = route.params;

  var randomData = []

  for (let index = 0; index < 30; index++) {
     randomData[index] = "More Scrollable Data..."  
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}>

        <Image style={styles.ImageStyle} source={couponImage} />

        <View style={styles.couponInfoStyle}>
          
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 5 }}>
            {couponPrice + " Off\n"}
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 5 }}>
            { /* you can use line breaks and shit (\n)  */}
            {couponText + "\n\nmore data... \n\nmore data... \n\nmore data..."}
          </Text>

        </View>
      </View>

      <FlatList
      data={randomData}
      renderItem={({ item, index }) => (
        <Text style={{ fontSize: 20, fontWeight: "bold"}}>
        {item}
        </Text>
        )}
    />
    </View>
  );
}

// nnow code in the extra details to the right of the picture 
// add some random data in the bottom of the picture also

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "skyblue",
    flexDirection: "column",
  },

  topContainer: {
    height: "40%",
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
  },

  couponInfoStyle: {
    flexDirection: "column",
  },

  ImageStyle: {
    alignSelf: "flex-start",
    height: "100%",
    width: undefined,
    aspectRatio: 1,
    backgroundColor: "green",
  },

  FlatlistContainer: {
    height: "50%",
    backgroundColor: "red",
  },

  couponContainer: {
    height: 150, // dont use percentage height with flatlist, flatlist technically dont have a true height value
    width: "42.5%",
    marginVertical: 5,
    marginLeft: "5%",
    backgroundColor: "red",
  },

  coupon: {
    fontSize: 20,
  },

});
