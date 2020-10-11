import React from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import * as SplashScreen from "expo-splash-screen";

import MyDrawer from "./navigations/principal";
import Store from "./store/conf_store";

export default class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    await this.laod_font();
  }

  async laod_font() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (this.state.loading) {
      return <View></View>;
    }

    const persistor = persistStore(Store);
    persistor.purge();
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <MyDrawer />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
