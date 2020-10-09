import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Block } from "expo-ui-kit";
import { Icon } from "native-base";

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
    const { navigation } = this.props;
    return (
      <Block center middle marginTop={"1x"} elevation={0}>
        {this.props.data !== null ? (
          <Block>
            {this.render_items(this.cut)}
            {this.data_cut.map((v, i) => (
              <View key={i} style={styles.category_container}>
                {v.map((s, j) => (
                  <TouchableOpacity
                    key={s.id}
                    style={styles.category_btn}
                    onPress={() => {
                      s.stack_path
                        ? navigation.navigate("menu_stack", {
                            title: s.title,
                          })
                        : null;
                    }}
                  >
                    <View key={i} style={styles.category_icon}>
                      <Icon
                        name={s.icon}
                        type="MaterialCommunityIcons"
                        style={{
                          fontSize: 50,
                        }}
                      />
                    </View>
                    <Text style={styles.category_btn_txt}>{s.title}</Text>
                  </TouchableOpacity>
                ))}
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
  category_btn: {
    flex: 1,
    width: "100%",
    marginHorizontal: 0,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  category_icon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "lightblue",
    borderRadius: 10,
    shadowColor: "lightblue",
    shadowOpacity: 0.7,
  },
  category_btn_txt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#000",
    textTransform: "capitalize",
  },
});

export default Grid;
