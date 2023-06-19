import $api from "@/store/api";
import { AppDispatch } from "@/store/store";
import { Dispatch } from "@reduxjs/toolkit";

import { setLoginLoading, setToken, setUserInfo } from "./slice";

export const Logout = (params?: any) => async (dispatch: AppDispatch) => {
  dispatch(setToken(""));
  dispatch(setUserInfo({}));
};
