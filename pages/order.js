import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Block, Text } from "expo-ui-kit";

import Grid from "../components/grid";
import Caroussel from "../components/caroussel";

import { categories } from "../data/app_data";

class Order extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block white scroll safe flex>
        <Block>
          <Block flex>
            <Caroussel navigation={navigation} ratio_height={3} />
          </Block>
          <Block marginTop={20} flex>
            <Grid data={categories.content} navigation={navigation} cut={3} />
          </Block>
        </Block>
      </Block>
    );
  }
}

export default Order;
