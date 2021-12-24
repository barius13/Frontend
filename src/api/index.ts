import axios, { AxiosRequestHeaders, Method } from "axios";

interface requestParams {
  body?: object;
  headers?: AxiosRequestHeaders;
}

export class API {
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

  static getCurrentSession() {
    return this.request("/auth/session", "GET", {});
  }
}

