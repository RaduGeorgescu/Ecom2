import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import wishlistReducer from "./wishListRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

// const combinedReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });

// const rootReducer = (state, action) => {
//   if (action.type === "logout") {
//     console.log("logout has been called");
//     state = undefined;
//   }
//   return combineReducers(state, action);
//   // } else {
//   //   return combinedReducer(state, action);
//   // }
// };
// //for persisting both cart and user

const persistedReducer = persistReducer(persistConfig, rootReducer);
console.log(userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(thunk)
      .concat(logger),
});

export let persistor = persistStore(store);
