import axios, {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  ResponseType,
} from "axios";

const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

const apiTimeOut = 300000;
const baseUrl = process.env.REACT_APP_BASE_URL || "";

const appendCacheParam = (url: string): string => {
  const timestamp = new Date().getTime();
  const hasParams = url.includes("?");
  if (hasParams) {
    const params = url.substring(url.indexOf("?"));
    return params.length > 1 ? `${url}&t=${timestamp}` : `${url}t=${timestamp}`;
  }
  return `${url}?t=${timestamp}`;
};

type TFetchOption<T> = Partial<{
  data: T;
  headers: AxiosRequestHeaders;
  timeout: number;
  method: string;
  responseType: ResponseType;
  forceSkipCache: boolean;
  withCredentials: boolean;
}>;

const fetch = <T>(
  url: string,
  {
    data,
    headers,
    timeout,
    method,
    responseType,
    forceSkipCache = true,
    withCredentials,
  }: TFetchOption<T>
): AxiosPromise => {
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    timeout: timeout || apiTimeOut,
    method,
    responseType,
    withCredentials,
  };

  if (data) {
    config.data = data;
  }

  // Prevent caching GET request by making random parameter
  let newURL = /^https?:\/\//.test(url) ? url : `${baseUrl}${url}`;
  if (forceSkipCache) {
    newURL = method === HTTP_METHODS.GET ? appendCacheParam(newURL) : newURL;
  }

  return axios(newURL, config);
};

export { appendCacheParam };
export const ApiHelper = {
  get: <T>(url: string, options = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.GET }),
  post: <T>(url: string, options = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.POST }),
  put: <T>(url: string, options = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.PUT }),
  patch: <T>(url: string, options = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.PATCH }),
  delete: <T>(url: string, options = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.DELETE }),
};
