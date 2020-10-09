import { createStore } from "redux";
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import order_list from "./reducers/order_list";

const persist_config = {
  key: "root",
  storage: AsyncStorage,
};

export default createStore(
  persistCombineReducers(persist_config, {
    order_list,
  })
);
