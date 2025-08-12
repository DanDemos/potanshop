import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { slice, loadingSlice, AccessTokenSlice } from "../reducers/reducer";
import CustomSlice from "../../helper/customSlice";
import whitelist_arr from "../../helper/persist_whitelist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { endpoints } from "../../services/api/endpoints";

// Type for the frame status
type FrameStatus = "loading" | "success" | "failed";

// Type for the frame data structure
type FrameData = {
  frame_status: FrameStatus;
  data?: any;
  error?: string;
};

// Utility type to create nested object types from endpoints
type CreateNestedTypes<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? { [P in keyof T[K]]?: FrameData }
    : never;
};

// Automatically generate DynamicSliceTypes from endpoints
type DynamicSliceTypes = CreateNestedTypes<typeof endpoints>;

type DynamicSlices = {
  [K in keyof typeof CustomSlice]: ReturnType<
    (typeof CustomSlice)[K]["reducer"]
  >;
};

type SliceMap = Record<string, { reducer: any }>;
const typedSlice = slice as SliceMap;

// Combine the reducers from the 'slice' object
const obj = {
  [AccessTokenSlice.name]: AccessTokenSlice.reducer,
  ...Object.fromEntries(
    Object.entries(typedSlice)?.map(([key, { reducer }]) => [key, reducer])
  ),
  ...Object.fromEntries(
    Object.entries(CustomSlice)?.map(([key, { reducer }]) => [key, reducer])
  ),
  [loadingSlice.name]: loadingSlice.reducer,
};

const rootReducers = combineReducers(obj);

// Configuration for redux-persist
const persistConfig = {
  key: "root", // Key for the persisted state
  storage: storage, // Storage engine for persisting the state (redux-persist uses 'localStorage' by default)
  whitelist: whitelist_arr, // List of reducers to be persisted
  version: 1, // Optional: to manage versioning of the persisted state
  // Performance optimizations
  timeout: 10000, // 10 second timeout
  debug: import.meta.env.MODE !== "production",
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Set the root reducer as the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [
          "payload.register",
          "payload.rehydrate",
          "payload.data",
        ],
      },
      immutableCheck: {
        // Disable immutable check in development for better performance
        ignoredPaths: ["loading"],
      },
      extraArgument: thunk,
    }),

  // Apply Redux thunk middleware
  devTools: import.meta.env.MODE !== "production",
});

export type AppDispatch = typeof store.dispatch;

export type RootState = DynamicSlices &
  DynamicSliceTypes & {
    loading: ReturnType<typeof loadingSlice.reducer>;
    AccessToken: ReturnType<typeof AccessTokenSlice.reducer>;
  };

// Create the persisted store
export const persist = persistStore(store);
