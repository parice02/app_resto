import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Block, Text } from "expo-ui-kit";

import Grid from "../components/grid";
import GridItem from "../components/grid_item";
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
            <Grid
              data={categories.content}
              navigation={navigation}
              cut={3}
              render={(item, index, navigation) => (
                <GridItem data={item} key={index} navigation={navigation} />
              )}
            />
          </Block>
        </Block>
      </Block>
    );
  }
}

export default Order;
