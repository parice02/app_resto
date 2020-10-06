import React from "react";
import { Block } from "expo-ui-kit";
import { StyleSheet, Image } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "native-base";

class DrawerMenu extends React.Component {
  render() {
    return (
      <DrawerContentScrollView
        {...this.props}
        contentContainerStyle={{ flex: 1 }}
      >
        <Block>
          <Block flex={0.6} margin bottom>
            <Avatar.Image
              source={require("../assets/user.png")}
              size={180}
              style={{ backgroundColor: "blue" }}
            />
            <Title>App Resto</Title>
            <Caption>contact-info@appresto.com</Caption>
          </Block>
          <Block>
            <DrawerItem
              label="Home"
              labelStyle={{ marginLeft: -16 }}
              onPress={() => this.props.navigation.navigate("home_drawer")}
              icon={({ focused, size, color }) => <Icon name={"home"} />}
            />
            <DrawerItem
              label="My account"
              labelStyle={{ marginLeft: -16 }}
              onPress={() => this.props.navigation.navigate("profile_stack")}
              icon={({ focused, size, color }) => (
                <Icon name={"cash-usd"} type="MaterialCommunityIcons" />
              )}
            />
            <DrawerItem
              label="Setings"
              labelStyle={{ marginLeft: -16 }}
              onPress={() => this.props.navigation.navigate("settings_drawer")}
              icon={({ focused, size, color }) => <Icon name={"ios-list"} />}
            />
            <DrawerItem
              label="Help"
              labelStyle={{ marginLeft: -16 }}
              onPress={() => this.props.navigation.navigate("help_drawer")}
              icon={({ focused, size, color }) => (
                <Icon name={"help-circle-outline"} />
              )}
            />
          </Block>
          <Block noflex top>
            <DrawerItem
              label="Logout"
              labelStyle={{ marginLeft: -16 }}
              //onPress={() => this.props.navigation.navigate("")}
              icon={({ focused, size, color }) => (
                <Icon name={"logout"} type={"AntDesign"} color={"white"} />
              )}
            />
          </Block>
        </Block>
      </DrawerContentScrollView>
    );
  }
}

export default DrawerMenu;
