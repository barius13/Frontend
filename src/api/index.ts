import { loginState } from "../pages/login";
import { registerState } from "../pages/register";
import axios, { AxiosRequestHeaders, Method } from "axios";

interface requestParams {
  body?: object;
  headers?: AxiosRequestHeaders;
}

interface registerParams extends registerState {
  hCaptchaKey: string;
}

export default class API {
  private static async request(
    url: string,
    method: Method,
    { body, headers }: requestParams
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        url: `https://api.kythi.com${url}`,
        method,
        headers,
        data: body,
        withCredentials: true,
      })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          const jsonErr = err.toJSON();
          err.response?.data ? (jsonErr.data = err.response.data) : null;
          reject(jsonErr);
        });
    });
  }

  private static encodeQueryString(data: { [key: string]: string }) {
    return Object.keys(data)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`
      )
      .join("&");
  }

  static getCurrentSession() {
    return this.request("/auth/session", "GET", {});
  }

  static register(data: registerParams) {
    return this.request("/auth/register", "POST", {
      body: data,
    });
  }

  static validateRegister(data: registerState) {
    return this.request(
      `/validate/register?${API.encodeQueryString(data as {})}`,
      "GET",
      {}
    );
  }

  static login(data: loginState) {
    for (const key in data) {
      if (data[key as keyof object] === null) {
        (data[key as keyof object] as string) = "";
      }
    }

    return this.request("/auth/login", "POST", {
      body: data,
    });
  }
}
