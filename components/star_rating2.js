import React from "react";
import { Block, Button } from "expo-ui-kit";
import { Animated, Easing } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating ?? 0,
      num_star: this.props.num_star ?? 5,
      animation: new Animated.Value(1),
      star_color: this.props.star_color ?? "orange",
    };
  }

  rate = (star) => this.setState({ rating: star });

  animate = () =>
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(this.state.animation.setValue(1));

  render() {
    let stars = [];

    const animate_scale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1],
    });

    const animate_opacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.4, 1],
    });

    const animate_rotate = this.state.animation.interpolate({
      inputRange: [1, 1.25, 1.75, 2],
      outputRange: ["0deg", "-45deg", "45deg", "0deg"],
    });

    const animation_style = {
      transform: [{ scale: animate_scale }, { rotate: animate_rotate }],
      opacity: animate_opacity,
    };

    for (let i = 1; i <= this.state.num_star; i++) {
      stars.push(
        <Button
          transparent
          key={i}
          onPress={() => {
            this.rate(i);
            this.animate();
          }}
        >
          <Animated.View style={i <= this.state.rating ? animation_style : ""}>
            <Star
              filled={i <= this.state.rating ? true : false}
              color={this.state.star_color}
            />
          </Animated.View>
        </Button>
      );
    }

    return <Block row>{stars}</Block>;
  }
}

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled ? "star" : "star-o"}
        color={this.props.color}
        size={25}
        style={{
          marginHorizontal: 3,
        }}
      />
    );
  }
}

export default Stars;
