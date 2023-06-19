import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

// import { loadSync } from "@/libs/i18n-provider";

export const SUPPORTED_LOCALES = ["en", "zh"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const languageDict: {
  [key: string]: string;
} = {
  zh: "中文（简体）",
  en: "English",
};
type InitialState = {
  dict: Record<string, any>;
  language: Locale;
};

const initialState: InitialState = {
  dict: {},
  language: "en",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDict: (state, action) => {
      state.dict = action.payload;
    },
    setLanguage: (state, action) => {
      // loadSync(action.payload as Locale);
      state.language = action.payload;
    },
  },
});

export const { setDict, setLanguage } = userSlice.actions;

// selectors

/**
 * Note: **do not** use address from userInfo, use const { account } = useWallet() instead.
 * The address is a copy of account, and might not be updated reasonably.
 */

export const selectDict = (state: RootState) => state.common.dict;
export const selectLanguage = (state: RootState) => state.common.language;

export default userSlice.reducer;
