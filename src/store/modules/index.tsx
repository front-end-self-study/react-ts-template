import { combineReducers } from "@reduxjs/toolkit";
import common from "./common/slice";
import user from "./user/slice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// import { user as userSub } from "./user";
// import { cart as cartSub } from "./common";

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};
const commonPersistConfig = {
  key: "common",
  storage: storage,
  whitelist: ["cart"],
};

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  common: persistReducer(commonPersistConfig, common),
});
