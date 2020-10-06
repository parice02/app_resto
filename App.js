import React from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider as PaperProvider } from "react-native-paper";

import MyDrawer from "./navigations/principal";

export default class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <View></View>;
    }
    return (
      <PaperProvider>
        <MyDrawer />
      </PaperProvider>
    );
  }
}
