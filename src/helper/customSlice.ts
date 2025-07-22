import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: string = "en";

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
