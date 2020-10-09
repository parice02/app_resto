import React from "react";
import { Block, Text } from "expo-ui-kit";
import OrderOption from "./order_option";
import { first_letter } from "../data/utility";

class Liste extends React.Component {
  state = { see_option: false, data: null };

  open_option = (data) => {
    this.setState({ see_option: true, data: data });
  };

  close_option = () => {
    this.setState({ see_option: false, data: null });
  };

  render() {
    const { navigation, data } = this.props;
    return (
      <Block margin width={"90%"}>
        {data ? (
          <Block>
            {data.title && (
              <Block>
                <Text h2 marginBottom={20} center>
                  {first_letter(data.title)}
                </Text>
              </Block>
            )}
            {data.content && (
              <Block>
                {data.content.map((v, i) =>
                  this.props.render(v, i, this.open_option, navigation)
                )}
              </Block>
            )}
          </Block>
        ) : (
          <Block center middle width>
            <Text>No data </Text>
          </Block>
        )}

        {this.state.see_option && (
          <OrderOption
            data={this.state.data}
            close_option={this.close_option}
          />
        )}
      </Block>
    );
  }
}

export default Liste;
