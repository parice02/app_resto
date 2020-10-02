import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
import { Block, Button } from "expo-ui-kit";

import Order from "../pages/order";
import MenuItems from "../pages/menu";
import Details from "../pages/details";
import Profile from "../pages/profile";
import SearchBar from "../components/search_bar";
import { first_letter } from "../data/utility";

const Stack = createStackNavigator();

export default class MyStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        mode={"card"}
        headerMode={"float"}
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            shadowColor: "#fff",
            elevation: 0,
          },
          headerLeft: () => (
            <Button
              padding
              margin
              transparent
              onPress={() =>
                route.name === "home_stack"
                  ? navigation.toggleDrawer()
                  : navigation.goBack()
              }
            >
              <Icon
                name={route.name === "home_stack" ? "menu" : "arrow-back"}
              />
            </Button>
          ),
          headerRight: () => (
            <Block row padding margin>
              <Button
                padding
                margin
                transparent
                onPress={() => {
                  navigation.navigate("search_stack");
                }}
              >
                <Icon name={"search"} />
              </Button>
              {route.name !== "profile_stack" && (
                <Button
                  padding
                  margin
                  transparent
                  onPress={() => {
                    navigation.navigate("profile_stack");
                  }}
                >
                  <Icon name={"cart"} />
                </Button>
              )}
            </Block>
          ),
        })}
      >
        <Stack.Screen
          name="home_stack"
          component={Order}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="menu_stack"
          component={MenuItems}
          options={(route) => ({
            title: first_letter(route.route.params.title),
          })}
        />
        <Stack.Screen
          name="profile_stack"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="search_stack"
          component={SearchBar}
          options={{ title: "Search", headerShown: false }}
        />
        <Stack.Screen
          name="detail_stack"
          component={Details}
          options={{
            title: "Détails",
            headerTitle: false,
            headerTransparent: true,
            //headerBackTitleVisible: false,
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    );
  }
}
