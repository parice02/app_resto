import React from "react";
import { Block } from "expo-ui-kit";
import { StyleSheet } from "react-native";

import List from "../components/list";
import Card from "../components/card";
import { choice_data } from "../data/utility";

class Menu extends React.Component {
  state = { data: choice_data(this.props.route.params.title) };

  render() {
    const { navigation } = this.props;

    return (
      <Block white safe>
        <Block scroll>
          <List
            data={this.state.data}
            navigation={navigation}
            render={(item, index, open_option, navigation) => (
              <Card
                data={item}
                key={index}
                open_option={open_option}
                navigation={navigation}
              />
            )}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Menu;
