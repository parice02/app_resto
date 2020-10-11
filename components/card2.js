import React from "react";
import { Text, Block } from "expo-ui-kit";
import { View, StyleSheet, Image } from "react-native";

class Card extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.card_img_wrapper}>
          <Image
            source={data.icon}
            resizeMode="contain"
            style={styles.card_img}
          />
        </View>
        <View style={styles.card_info}>
          <Block>
            <Text style={styles.card_title}>{data.food}</Text>
            <Block flex>
              <Block row flex space={"between"}>
                <Text title style={styles.card_details}>
                  Unit price
                </Text>
                <Text style={styles.card_details}>
                  {data.price}
                  {"\t"} XOF
                </Text>
              </Block>
              <Block row space={"between"}>
                <Text style={styles.card_details}>Quantity</Text>
                <Text style={styles.card_details}>{data.quantity}</Text>
              </Block>
              <Block row space={"between"}>
                <Text style={styles.card_details}>Total price</Text>
                <Text style={styles.card_details}>
                  {data.total_price}
                  {"\t"} XOF
                </Text>
              </Block>
            </Block>
          </Block>
        </View>
      </View>
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
