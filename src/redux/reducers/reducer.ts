import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../services/api/endpoints";
import {
  isPendingAction,
  isFulfilledAction,
  isRejectedAction,
} from "../actions/reduxActionHelpers";
import FrameSliceReducer from "../../helper/FrameSliceReducer";
import { FindAccessToken, token_endpoint } from "../../helper/setAccessToken";
import trueTypeOf from "../../lib/trueTypeOf";
import callAxios from "../../services/api/axios";

export const createApiThunk = (thunkName, payload, loadingData) =>
  createAsyncThunk(`${thunkName}`, async (data, thunkAPI) => {
    const { endpoint } = payload;
    thunkAPI.dispatch(loadingSlice.actions.setLoading(loadingData));

    try {
      let response = await callAxios(payload);

      if (thunkName === token_endpoint) {
        thunkAPI.dispatch(
          AccessTokenSlice.actions.setAccessToken(FindAccessToken(response))
        );
      }

      if (endpoint?.res_modifier) {
        response = endpoint.res_modifier(response);
      }

      if (Number(endpoint?.expire_in > 0)) {
        const currentDate = new Date();
        const expireDate = new Date();
        expireDate.setDate(currentDate.getDate() + Number(endpoint?.expire_in));
        response.expireDate = expireDate;
      }

      // console.log(response);
      return response || null;
    } finally {
      thunkAPI.dispatch(loadingSlice.actions.setLoading(loadingData));
    }
  });

export const slice = {};

Object.entries(endpoints).forEach(([key]) => {
  const initialState = {};

  slice[key] = createSlice({
    name: key,
    initialState,
    reducers: FrameSliceReducer,
    extraReducers: (builder) => {
      builder
        .addMatcher(isPendingAction(`${key}/`), (state, action) => ({
          ...state,
          [`${action.type.split("/")[1]}`]: {
            ...state[`${action.type.split("/")[1]}`],
            frame_status: "loading",
          },
        }))
        .addMatcher(isFulfilledAction(`${key}/`), (state, action) => ({
          ...state,
          [`${action.type.split("/")[1]}`]: {
            frame_status: "success",
            data:
              trueTypeOf(action.payload) == "object"
                ? { ...action.payload }
                : action.payload,
          },
        }))
        .addMatcher(isRejectedAction(`${key}/`), (state, action) => {
          const err = (action as any).error?.message ?? "Unknown error";
          return {
            ...state,
            [`${action.type.split("/")[1]}`]: {
              frame_status: "failed",
              error: err,
            },
          };
        });
    },
  });
});

const INITIAL_STATE = {};
export const loadingSlice = createSlice({
  name: "loading",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      const { group_name, uniqueAPI_id } = action.payload;
      if (group_name == null) {
        return state;
      }
      const timestamp = new Date().getTime();
      const existingData = state[group_name];
      if (existingData && existingData[`state_${uniqueAPI_id}`]) {
        delete existingData[`state_${uniqueAPI_id}`];

        if (Object.keys(existingData).length === 0) {
          delete state[group_name];
        }
      } else {
        if (!existingData) {
          state[group_name] = {};
        }

        state[group_name][`state_${uniqueAPI_id}`] = timestamp;
      }
      return state;
    },
  },
});

export const AccessTokenSlice = createSlice({
  name: "AccessToken",
  initialState: INITIAL_STATE,
  reducers: {
    setAccessToken: (state, action) => {
      return action.payload;
    },
  },
});

export default {
  slice,
  loadingSlice,
  AccessTokenSlice,
  createApiThunk,
};
