import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";

import OrderStack from "./order_stack";
import Other from "../pages/other";

const Tab = createBottomTabNavigator();

export default class MyTab extends React.Component {
  render() {
    return (
      <Animated.View
        style={[{ flex: 1, overflow: "hidden" }, this.props.style]}
      >
        <Tab.Navigator
          initialRouteName={"home_tab"}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon_name;
              let type;
              if (route.name === "home_tab") {
                icon_name = focused ? "home" : "home";
                type = focused ? "Entypo" : "AntDesign";
              } else if (route.name === "other_tab") {
                icon_name = focused
                  ? "information-circle"
                  : "information-circle-outline";
                type = focused ? "Ionicons" : "Ionicons";
              }
              return (
                <Icon
                  name={icon_name}
                  size={size}
                  style={{ color: color }}
                  type={type}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "lightblue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="home_tab"
            component={OrderStack}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="other_tab"
            component={Other}
            options={{ tabBarBadge: 3, title: "Other" }}
          />
        </Tab.Navigator>
      </Animated.View>
    );
  }
}
