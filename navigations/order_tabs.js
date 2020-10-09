import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";

import OrderStack from "./order_stack";
import OrderList from "./list_order_stack";

const Tab = createBottomTabNavigator();

class MyTab extends React.Component {
  render() {
    return (
      <Animated.View
        style={[{ flex: 1, overflow: "hidden" }, this.props.style]}
      >
        <Tab.Navigator
          initialRouteName={"home_tab"}
          tabBarOptions={{
            activeTintColor: "lightblue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="home_tab"
            component={OrderStack}
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name={"home"}
                  size={size}
                  style={{ color: color }}
                  type={"Ionicons"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="list_stack"
            component={OrderList}
            options={{
              tabBarBadge: this.props.orders_count || null,
              title: "Order List",

              tabBarIcon: ({ color, size }) => (
                <Icon
                  name={"cart"}
                  size={size}
                  style={{ color: color }}
                  type={"Ionicons"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    orders_count: state.order_list.length,
  };
};

export default connect(mapStateToProps)(MyTab);
