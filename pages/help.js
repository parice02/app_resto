import React from "react";
import { Block, Text } from "expo-ui-kit";
import { View, StyleSheet, StatusBar } from "react-native";

class Help extends React.Component {
  render() {
    return (
      <Block center middle>
        <Text>Help page</Text>
        <StatusBar style="auto" />
      </Block>
    );
  }
}

export default Help;
