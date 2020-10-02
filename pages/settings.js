import React from "react";
import { Block, Text } from "expo-ui-kit";
import { View, StatusBar } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <Block center middle>
        <Text>Settings page</Text>
        <StatusBar style="auto" />
      </Block>
    );
  }
}

export default Home;
