import React, { useEffect, useState } from "react";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { createLogger } from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import reducers from "./modules";

const logger = createLogger();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    // return middleware;
    return import.meta.env.PROD ? middleware : middleware.concat(logger);
  },
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [persistIsFinish, setPersistIsFinish] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    persistStore(store, {}, () => {
      setPersistIsFinish(true);
    });
  }, []);

  if (!persistIsFinish) {
    return null;
  }
  return <Provider store={store}>{children}</Provider>;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
