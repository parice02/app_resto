import React from "react";
import { Block, Text } from "expo-ui-kit";
import { Portal, Dialog, Button } from "react-native-paper";
import InputSpinner from "react-native-input-spinner";

import { first_letter } from "../data/utility";

class Other extends React.Component {
  state = {
    visible: true,
    spinner_value: 1,
    total_price: Number.parseInt(this.props.data.price),
  };

  on_change = (value) =>
    this.setState({
      total_price: Number.parseInt(this.props.data.price) * value,
    });

  render() {
    const { data } = this.props;
    return (
      <Portal>
        <Block center middle>
          <Dialog visible={this.state.visible}>
            <Dialog.Title>{first_letter(data.title)}</Dialog.Title>
            <Dialog.Content>
              <InputSpinner
                min={1}
                step={1}
                initialValue={1}
                editable={false}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                colorPress={"lightgrey"}
                value={this.state.spinner_value}
                onChange={this.on_change}
              />
              <Text bold h3 marginTop={20}>
                Montant total {this.state.total_price} Francs CFA
              </Text>
            </Dialog.Content>

            <Dialog.Actions>
              <Button>valider</Button>
              <Button
                onPress={() => {
                  this.setState({ visible: false });
                  this.props.close_option();
                }}
              >
                annuler
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Block>
      </Portal>
    );
  }
}

export default Other;
