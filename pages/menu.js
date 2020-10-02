import React from "react";
import { Block } from "expo-ui-kit";
import { StyleSheet, StatusBar, ActivityIndicator } from "react-native";

import List from "../components/list";

import { get_response } from "../data/api";

class Boissons extends React.Component {
  state = { data: null, loading: true };

  get_data = async () => {
    const retour = await get_response(this.props.route.params.title);
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
          <Block white scroll padding>
            <List data={this.state.data} navigation={navigation} />
            <StatusBar style="auto" />
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

export default Boissons;
