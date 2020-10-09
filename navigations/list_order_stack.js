import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
import { Block, Button } from "expo-ui-kit";

import ListOrder from "../pages/list_order";
import SearchBar from "../components/search_bar";

const Stack = createStackNavigator();

export default class MyStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        mode={"card"}
        headerMode={"float"}
        initialRouteName={"home_stack"}
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
                route.name === "list_stack"
                  ? navigation.toggleDrawer()
                  : navigation.goBack()
              }
            >
              <Icon
                name={route.name === "list_stack" ? "menu" : "arrow-back"}
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
            </Block>
          ),
        })}
      >
        <Stack.Screen
          name="list_stack"
          component={ListOrder}
          options={{ title: "Liste Order" }}
        />
        <Stack.Screen
          name="search_stack"
          component={SearchBar}
          options={{ title: "Search", headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
