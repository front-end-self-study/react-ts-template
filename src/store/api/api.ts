import { message } from "antd";
/** @format */
import axios from "axios";


import {
  requestFailFunc,
  requestSuccessFunc,
  responseFailFunc,
  responseSuccessFunc,
} from "./intercept";

const axiosInstance = axios.create({
  // timeout: 30000, // TODO delete it after backend fix
  maxContentLength: 2000,
  headers: {
    // 'Content-Type': 'application/json'
  },
  baseURL: `/graphql`,
});

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc);

// 注入返回拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

/**
 *
 * @param query graphql query string
 * @param variables graphql query variables
 * @param signal abort signal
 */
const $api = async <Param = any, ReturnVal = any>({
  query,
  variables,
  signal,
  ...rest
}: {
  query: string;
  variables?: Param;
  signal?: AbortSignal;
  [key: string]: any;
}) => {
  const res = await axiosInstance({
    data: { query, variables },
    method: "POST",
    signal,
    ...rest,
  });
  return res as ReturnVal;
};

/**
 * get data from api
 * @param url the url of the api
 * @param signal abort signal
 */
export const axiosGet = async (url: string, signal?: AbortSignal) => {
  return await axios.get(url, { signal }).catch((e) => {
    message.error(e.message);
  });
};

export const CONSOLE_REQUEST_ENABLE = true;
// 开启响应参数打印
export const CONSOLE_RESPONSE_ENABLE = true;

export default $api;
