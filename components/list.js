import React from "react";
import { Block, Button, Text } from "expo-ui-kit";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Icon } from "native-base";

import StarRating from "./StarRating";
import { first_letter } from "../data/utility";

class Liste extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <Block margin width={"90%"} style={styles.cards_wrapper}>
        <Block>
          <Text h2 marginBottom={20} center>
            {first_letter(data.title)}
          </Text>
        </Block>
        {data.content !== null ? (
          <Block>
            {data.content.map((v, i) => (
              <TouchableOpacity
                key={i}
                style={styles.card}
                onPress={() => {
                  v.stack_path
                    ? navigation.navigate("detail_stack", { data: v })
                    : null;
                }}
              >
                <View style={styles.card_img_wrapper}>
                  <Icon
                    name={v.icon}
                    type={"MaterialCommunityIcons"}
                    style={{ fontSize: 70 }}
                  />
                </View>
                <View
                  style={[
                    styles.card_info,
                    { flexDirection: "row", justifyContent: "space-around" },
                  ]}
                >
                  <View>
                    <Text style={styles.card_title}>{v.title}</Text>
                    <StarRating ratings={3} reviews={"+99"} />
                    <Text style={styles.card_details}>{v.details}</Text>
                  </View>
                  <Button
                    center
                    white
                    useForeground
                    onPress={() => {
                      Alert.alert("Clicked");
                    }}
                  >
                    <Icon
                      name={"plus"}
                      type={"Octicons"}
                      style={{ fontSize: 25 }}
                    />
                  </Button>
                </View>
              </TouchableOpacity>
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

export default Liste;

const styles = StyleSheet.create({
  cards_wrapper: { alignSelf: "center" },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  card_img_wrapper: {
    flex: 1,
    backgroundColor: "lightblue",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  card_img: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    resizeMode: "contain",
  },
  card_info: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  card_title: { fontWeight: "bold", textTransform: "capitalize", fontSize: 18 },
  card_details: {
    fontSize: 12,
    color: "#444",
  },
});
