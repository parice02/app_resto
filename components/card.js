import React from "react";
import { Button, Text } from "expo-ui-kit";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

import StarRating from "./star_rating";

class Card extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("detail_stack", { data: data });
        }}
      >
        <View style={styles.card_img_wrapper}>
          <Image
            source={data.icon2}
            resizeMode="contain"
            style={styles.card_img}
          />
        </View>
        <View
          style={[
            styles.card_info,
            { flexDirection: "row", justifyContent: "space-around" },
          ]}
        >
          <View>
            <Text style={styles.card_title}>{data.title}</Text>
            <StarRating ratings={data.star.count} reviews={data.star.vote} />
            <Text style={styles.card_details}>{data.details}</Text>
          </View>
          <Button
            center
            white
            useForeground
            onPress={() => {
              this.props.open_option(data);
            }}
          >
            <Octicons name={"plus"} size={25} />
          </Button>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  cards_wrapper: { alignSelf: "center" },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 0,
  },
  card_img_wrapper: {
    flex: 1,
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
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  card_title: { fontWeight: "bold", textTransform: "capitalize", fontSize: 18 },
  card_details: {
    fontSize: 17,
    color: "#444",
  },
});
