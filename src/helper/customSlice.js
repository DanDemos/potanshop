import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {

}

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState: "en",
  reducers: {
    setLanguage: (state, action) => {
      return action.payload
    },
  },
});

export default {
  languageSlice,
}