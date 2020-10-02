import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "native-base";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TabOrder from "./order_tabs";
import Settings from "../pages/settings";
import Help from "../pages/help";
import Profile from "../pages/profile";
import DrawerMenu from "../components/drawer_content";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("window");

export default function drawer() {
  return (
    <NavigationContainer>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["blue", "skyblue", "lightblue"]}
      >
        <Drawer.Navigator
          drawerType={"back"}
          overlayColor={"transparent"}
          initialRouteName="home_drawer"
          drawerContent={(props) => <DrawerMenu {...props} />}
          drawerStyle={{ backgroundColor: "transparent" }}
          screenOptions={({ route }) => ({
            drawerIcon: ({ focused, color, size }) => {
              let icon_name;
              if (route.name === "Home") {
                icon_name = focused ? "home" : "home";
              } else if (route.name === "Setings") {
                icon_name = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Help") {
                icon_name = focused ? "help-circle" : "help-circle-outline";
              }
              return (
                <Icon
                  name={icon_name}
                  size={size}
                  color={color}
                  type={"Ionicons"}
                />
              );
            },
          })}
        >
          <Drawer.Screen name="home_drawer" component={TabOrder} />
          <Drawer.Screen name="profile_drawer" component={Profile} />
          <Drawer.Screen name="settings_drawer" component={Settings} />
          <Drawer.Screen name="help_drawer" component={Help} />
        </Drawer.Navigator>
      </LinearGradient>
    </NavigationContainer>
  );
}
