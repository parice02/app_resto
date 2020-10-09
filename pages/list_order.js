import React from "react";
import { Block, Text } from "expo-ui-kit";
import { Alert, Button } from "react-native";
import { connect } from "react-redux";

import List from "../components/list";
import Card from "../components/card2";

class OrderList extends React.Component {
  on_click = (action) => {
    const text =
      action === "ok"
        ? "Votre commande a été envoyé"
        : "Votre commande a bien été annulé";

    Alert.alert("Message", text);
  };
  render() {
    const { navigation } = this.props;
    const data = { title: "Liste des commandes", content: this.props.orders };
    return (
      <Block safe white>
        {this.props.orders.length !== 0 ? (
          <Block>
            <Block scroll>
              <List
                data={data}
                navigation={navigation}
                render={(item, index) => <Card data={item} key={index} />}
              />
            </Block>
            <Block row center middle space={"around"} margin>
              <Button title={"VALIDER"} onPress={() => this.on_click("ok")} />
              <Button title={"ANNULER"} onPress={() => this.on_click("")} />
            </Block>
          </Block>
        ) : (
          <Block center middle>
            <Text center middle>
              Aucune commande
            </Text>
          </Block>
        )}
      </Block>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    orders: state.order_list,
  };
};

export default connect(mapStateToProps)(OrderList);
