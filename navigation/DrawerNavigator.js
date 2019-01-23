import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import PrayerScreen from "../screens/PrayerScreen";
import AboutScreen from "../screens/AboutScreen";
import ToolsScreen from "../screens/ToolsScreen";

const CustomDrawerComponent = props => (
  <SafeAreaView
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}
  >
    <View
      style={{
        height: 150,
        backgroundColor: "rbg(0, 168, 90)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../assets/hoasen.png")}
        style={{
          height: 130,
          width: 130,
          borderRadius: 150
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Prayer: PrayerScreen,
    Tools: ToolsScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "rgb(0, 136, 77)",
    contentOptions: {
      activeTintColor: "rgb(255,105,180)",
      inactiveTintColor: "rgb(255,255,255)",
      labelStyle: {
        fontWeight: "normal",
        fontSize: 16,
        textShadowOffset: {
          width: 1,
          height: 1
        }
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
