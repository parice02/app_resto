import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";

class GridItem extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <TouchableOpacity
        style={styles.category_btn}
        onPress={() => {
          data.stack_path
            ? navigation.navigate("menu_stack", {
                title: data.title,
              })
            : null;
        }}
      >
        <View style={styles.category_icon}>
          <Icon
            name={data.icon}
            type="MaterialCommunityIcons"
            style={{
              fontSize: 50,
            }}
          />
        </View>
        <Text style={styles.category_btn_txt}>{data.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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

export default GridItem;
