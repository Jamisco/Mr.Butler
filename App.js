import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homescreen from "./Screens/HomeScreen";
import HotCouponscreen from "./Screens/HotCouponScreen";
import PopularCouponscreen from "./Screens/PopularCouponScreen";
import SeasonalCouponscreen from "./Screens/SeasonalCouponScreen";
import CouponScreen from "./Screens/CouponDetailScreen";

const Stack = createNativeStackNavigator();

const searchBarPosition = "30%";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Hot Coupons" component={HotCouponscreen} />
        <Stack.Screen name="Popular Coupons" component={PopularCouponscreen} />
        <Stack.Screen name="Seasonal Coupons" component={SeasonalCouponscreen} />
        <Stack.Screen name="Coupon Details" component={CouponScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  SupremeContainer: {
    flex: 1,
    backgroundColor: "skyblue",
    marginTop: "6%",
    flexDirection: "column",
    width: "100%",
  },
});

// export default function App() {
//   return (
//     <View style={styles.SupremeContainer}>
//       <MainButton />
//     </View>
//   );
// }
