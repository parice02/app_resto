import React from "react";
import { StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { Block, Text } from "expo-ui-kit";

import Grid from "../components/grid";
import Caroussel from "../components/caroussel";

//import { categories } from "../data/app_data";
import { get_response } from "../data/api";

class Order extends React.Component {
  state = { data: null, loading: true };

  get_data = async () => {
    const retour = await get_response("categories");
    this.setState({ data: retour, loading: false });
  };

  componentDidMount() {
    this.get_data();
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block>
        {this.state.loading ? (
          <Block white middle center>
            <ActivityIndicator size={50} />
          </Block>
        ) : (
          <Block white scroll>
            <StatusBar style="auto" />
            <Block white>
              <Caroussel navigation={navigation} ratio_height={3} />
            </Block>
            <Block>
              <Grid
                data={this.state.data.content}
                navigation={navigation}
                cut={3}
              />
            </Block>
          </Block>
        )}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Order;
