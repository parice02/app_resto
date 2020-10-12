import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Icon } from "native-base";
import { Block, Text } from "expo-ui-kit";
import Animated, { Easing } from "react-native-reanimated";

import { data_list } from "../data/app_data";

const { Value, timing } = Animated;
const { width, height } = Dimensions.get("window");

const display_duration = 500;

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.input_box_translate = new Value(width);
    this.back_button_opacity = new Value(0);
    this.content_translate = new Value(height);
    this.content_opacity = new Value(0);
    this.state = {
      focused: false,
      keyword: "",
      result: [],
    };
  }

  on_focus = () => {
    this.setState({ focused: true });
    const input_box_translate_config = {
      duration: display_duration,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const back_button_opacity_config = {
      duration: display_duration,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    const content_translate_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const content_opacity_config = {
      duration: display_duration,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.input_box_translate, input_box_translate_config).start();
    timing(this.back_button_opacity, back_button_opacity_config).start();
    timing(this.content_translate, content_translate_config).start();
    timing(this.content_opacity, content_opacity_config).start();

    this.refs.input.focus();
  };

  on_blur = () => {
    this.setState({ focused: false });
    const input_box_translate_config = {
      duration: display_duration,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };

    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const content_translate_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };

    const content_opacity_config = {
      duration: display_duration,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    timing(this.input_box_translate, input_box_translate_config).start();
    timing(this.back_button_opacity, back_button_opacity_config).start();
    timing(this.content_translate, content_translate_config).start();
    timing(this.content_opacity, content_opacity_config).start();

    this.refs.input.blur();
    this.props.navigation.goBack();
  };

  empty_box = () => {
    this.setState({ keyword: "" });
  };

  componentDidMount() {
    this.on_focus();
  }

  search = (word) => {
    if (word !== "") {
      this.setState({ result: [] });
      data_list.forEach((v) => {
        v.includes(word.toLowerCase())
          ? this.setState((prev) => ({ result: [...prev.result, v] }))
          : null;
      });
    } else {
      this.setState({ result: [] });
    }
  };

  render() {
    let { result, keyword, focused } = this.state;
    return (
      <Block white flex safe>
        <Block flex style={styles.header_safe_area}>
          <View style={styles.header}>
            <View style={styles.header_inner}>
              <Animated.View
                style={[
                  styles.input_inbox,
                  { transform: [{ translateX: this.input_box_translate }] },
                ]}
              >
                <Animated.View style={{ opacity: this.back_button_opacity }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    underlayColor={"#ccd0d5"}
                    onPress={this.on_blur}
                    style={styles.back_icon_box}
                  >
                    <Icon name={"chevron-left"} type={"Entypo"} />
                  </TouchableOpacity>
                </Animated.View>
                <TextInput
                  ref={"input"}
                  placeholder={"search"}
                  clearButtonMode={"always"}
                  autoFocus={true}
                  value={keyword}
                  onChangeText={(value) => {
                    this.setState({ keyword: value }, () => this.search(value));
                  }}
                  style={styles.input}
                />
                <TouchableOpacity
                  activeOpacity={1}
                  underlayColor={"#ccd0d5"}
                  onPress={this.empty_box}
                  style={styles.back_icon_box}
                >
                  <Icon name={"clear"} type={"MaterialIcons"} />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </Block>
        <Animated.View
          style={[
            styles.content,
            {
              opacity: this.content_opacity,
              transform: [{ translateY: this.content_translate }],
            },
          ]}
        >
          <Block safe flex>
            <View style={styles.content_inner}>
              <View style={styles.separator} />
              {keyword === "" ? (
                <Block center middle style={styles.image_placeholder_container}>
                  <Image
                    style={styles.image_placeholder}
                    source={require("../assets/search.png")}
                  />
                  <Text style={styles.image_placeholder_text}>
                    Enter your search
                  </Text>
                </Block>
              ) : (
                <Block safe>
                  {result.length !== 0 && (
                    <Block scroll>
                      {result.map((v, i) => (
                        <View key={i} style={styles.search_item}>
                          <Icon style={styles.item_icon} name={"search"} />
                          <Text margin>{v}</Text>
                        </View>
                      ))}
                    </Block>
                  )}
                </Block>
              )}
            </View>
          </Block>
        </Animated.View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
  },
  header: { height: 40 },
  header_inner: {
    flex: 1,
    overflow: "visible",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  search_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    //backgroundColor: "#e4e6eb",
    justifyContent: "center",
    alignItems: "center",
  },
  input_inbox: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: width - 50,
  },
  back_icon_box: {
    height: 40,
    width: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#e4e6eb",
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  content: {
    width: width,
    height: height,
    position: "absolute",
    left: 0,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    //backgroundColor: "white",
  },
  content_inner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: "#e4e6eb",
  },
  image_placeholder_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    //alignItems: "center",
    //marginTop: 150,
  },
  image_placeholder: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  image_placeholder_text: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },
  search_item: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    //justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6eb",
    marginLeft: 16,
    marginRight: 16,
  },
  item_icon: {
    marginLeft: 15,
  },
});
