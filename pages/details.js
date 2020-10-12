import React from "react";
import { Block, Text } from "expo-ui-kit";
import { View, StyleSheet, Image, Dimensions, Platform } from "react-native";
import HeaderImageScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";
import { Icon } from "native-base";
import * as animatable from "react-native-animatable";

import Stars from "../components/star_rating2";
import { first_letter } from "../data/utility";

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 350;

class Detail extends React.Component {
  render() {
    const { data } = this.props.route.params;
    const native_title_view = React.createRef();

    return (
      <Block safe white>
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          renderHeader={() => (
            <Image source={data.icon2} style={styles.image} />
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>{data.title}</Text>
            </View>
          )}
          renderFixedForeground={() => (
            <animatable.View
              style={styles.navTitleView}
              ref={native_title_view}
            >
              <Text style={styles.navTitle}>{data.title}</Text>
            </animatable.View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => native_title_view.current.fadeInUp(200)}
            onDisplay={() => native_title_view.current.fadeOut(100)}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}>Overview</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <Stars rating={data.star.count} num_star={5} />
                <Text>({data.star.vote})</Text>
              </View>
            </View>
          </TriggeringView>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionContent}>{data.details}</Text>
          </View>
          <View style={styles.categories}>
            {/**Liste des catégories */}
            <View style={styles.categoryContainer}>
              <Icon
                name={"tag"}
                style={{ fontSize: 16, color: "white" }}
                type={"FontAwesome"}
              />
              <Text style={styles.category}>{data.details}</Text>
            </View>

            {/**
             * Map
             */}
          </View>
        </HeaderImageScrollView>
      </Block>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FF6347",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 25,
    textTransform: "capitalize",
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 30,
    backgroundColor: "transparent",
    textTransform: "capitalize",
  },
  sectionLarge: {
    minHeight: 200,
  },
});
