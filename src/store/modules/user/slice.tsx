import $api from "@/store/api";
import { RootState } from "@/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { loadSync } from "@/libs/i18n-provider";

export const languageDict: {
  [key: string]: string;
} = {
  zh: "中文（简体）",
  en: "English",
};
type InitialState = {
  token: string;
  loginLoading: boolean;
  signature: Record<string, any>;
  userInfo: any;
};

const initialState: InitialState = {
  token: "",
  loginLoading: false,
  signature: {},
  userInfo: {
    feeRecipient: "",
    takerFee: 0,
    makerFee: 0,
    address: "" as `0x${string}`,
  } as any,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoginLoading: (state, action) => {
      state.loginLoading = action.payload;
    },
    setSignature: (state, action) => {
      state.signature = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setToken,
  setSignature,
  setUserInfo,

  setLoginLoading,
} = userSlice.actions;

// selectors

/**
 * Note: **do not** use address from userInfo, use const { account } = useWallet() instead.
 * The address is a copy of account, and might not be updated reasonably.
 */
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectUserName = (state: RootState) =>
  state.user.userInfo.username;
export const selectToken = (state: RootState) => state.user.token;
export const selectLoginLoading = (state: RootState) => state.user.loginLoading;
export const selectSignature = (state: RootState) => state.user.signature;

export default userSlice.reducer;
