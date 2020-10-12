import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class GridItem extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <TouchableOpacity
        style={styles.category_btn}
        onPress={() => {
          navigation.navigate("menu_stack", {
            title: data.title,
          });
        }}
      >
        <View style={styles.category_icon}>
          <MaterialCommunityIcons name={data.icon} size={50} />
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
