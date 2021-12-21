import axios, { AxiosRequestHeaders, Method } from "axios";

interface requestParams {
  body?: any;
  headers?: AxiosRequestHeaders;
}

export default class API {
  private static async request(
    url: string,
    method: Method,
    { body, headers }: requestParams
  ): Promise<any> {
    return axios({
      url: `https://api.kythi.com${url}`,
      method,
      headers,
      data: body,
      withCredentials: true,
    });
  }

  public static async register(
    username: string,
    email: string,
    password: string,
    inviteCode: string,
    hCaptchaKey: string
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request("/auth/register", "POST", {
          body: {
            username,
            email,
            password,
            inviteCode,
            hCaptchaKey,
          },
        });

        resolve(response.data);
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }

  public static async validateRegisterParams(username: string, email: string, password: string, inviteCode: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request(`/validate/register${encodeQueryData({username, email, password, inviteCode})}`, "GET", {});

        resolve(response.data)
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }

  public static async login(username: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request("/auth/login", "POST", {
          body: {
            username,
            password,
          },
        });

        resolve(response.data);
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }

  public static async logOut(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request("/auth/logOut", "POST", {});

        resolve(response.data);
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }

  public static async getSession(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request("/auth/session", "GET", {});

        resolve(response.data);
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }

  public static async getStats(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request("/stats", "GET", {});

        resolve(response.data);
      } catch (err) {
        const jsonErr = err.toJSON();
        err.response?.data ? (jsonErr.data = err.response.data) : null;
        reject(jsonErr);
      }
    });
  }
}

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return "?" + ret.join("&");
}