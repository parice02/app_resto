import React from "react";
import { Block, Text } from "expo-ui-kit";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import { categories } from "../data/app_data";

const { width, height } = Dimensions.get("window");

class Help extends React.Component {
  render() {
    const slider_height = height / this.props.ratio_height;
    return (
      <View style={styles.container}>
        <View style={[styles.slider_container, { height: slider_height }]}>
          <Swiper
            height={slider_height}
            autoplay
            //showsButtons={true}

            horizontal={true}
            autoplayTimeout={5}
          >
            {categories.map((v, i) => (
              <View key={i} style={styles.slide}>
                <Image
                  source={v.icon2}
                  resizeMode="contain"
                  style={styles.slider_image}
                />
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider_container: {
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    /* shadowOpacity: 1,
    shadowColor: "black",
    shadowRadius: 10, */
    borderWidth: 1,
  },
  slider_image: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
