import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Block } from "expo-ui-kit";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.cut = this.props.cut !== undefined ? this.props.cut : 3;
    this.data_cut = [];
  }

  render_items = (cut) => {
    const { data } = this.props;
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i % cut === 0) {
        this.data_cut[j] = [data[i]];
      } else {
        this.data_cut[j].push(data[i]);
      }

      if (this.data_cut[j].length === cut) {
        j++;
      }
    }
  };

  render() {
    const { navigation, data, render } = this.props;
    return (
      <Block center middle marginTop={"1x"} elevation={0}>
        {data !== null ? (
          <Block>
            {this.render_items(this.cut)}
            {this.data_cut.map((v, i) => (
              <View key={i} style={styles.category_container}>
                {v.map((s, j) => render(s, j, navigation))}
              </View>
            ))}
          </Block>
        ) : (
          <Block center middle width>
            <Text>No data </Text>
          </Block>
        )}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  category_container: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
  },
});

export default Grid;
