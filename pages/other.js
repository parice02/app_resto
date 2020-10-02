import React from "react";
import { Block, Text } from "expo-ui-kit";
import { View, StyleSheet, StatusBar } from "react-native";
import {  Container } from "native-base";

class Other extends React.Component {
  render() {
    return (
      <Container>
        <Block center middle>
          <Text>Other page</Text>
          <StatusBar style="auto" />
        </Block>
      </Container>
    );
  }
}

export default Other;
