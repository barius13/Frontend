import axios, { AxiosRequestHeaders, Method } from "axios";
import { UserEmbed, loginState, registerState } from "../typings";

interface requestParams {
  body?: object;
  headers?: AxiosRequestHeaders;
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

  public static async getPing(): Promise<any> {
    const startedAt = Date.now();

    return new Promise((resolve, reject) => {
      this.request("/", "GET", {})
        .then(() => {
          resolve(Date.now() - startedAt);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static submitTestimonial(content: string) {
    return this.request("/users/@me/testimonials", "POST", {
      body: {
        content,
      },
    });
  }

  static editTestimonial(content: string) {
    return this.request("/users/@me/testimonials", "PATCH", {
      body: {
        content,
      },
    });
  }

  static deleteTestimonial() {
    return this.request("/users/@me/testimonials", "DELETE", {});
  }

  static getCurrentSession() {
    return this.request("/auth/session", "GET", {});
  }

  static logOut() {
    return this.request("/auth/logOut", "POST", {});
  }

  static createEmbed() {
    return this.request("/users/@me/settings/embeds", "POST", {});
  }

  static updateEmbedSettings(
    id: string,
    data: Omit<UserEmbed, "id" | "userId">
  ) {
    const dataClone = Object.assign({}, data);

    if (dataClone.authorUrl && !dataClone.authorUrl?.match(/https?:\/\//i)) {
      dataClone.authorUrl = `https://${dataClone.authorUrl}`;
    }

    if (dataClone.siteUrl && !dataClone.siteUrl?.match(/https?:\/\//i)) {
      dataClone.siteUrl = `https://${dataClone.siteUrl}`;
    }

    return this.request("/users/@me/settings/embeds/" + id, "PATCH", {
      body: dataClone,
    });
  }

  static deleteEmbed(id: string) {
    return this.request("/users/@me/settings/embeds/" + id, "DELETE", {});
  }

  static register(data: registerState) {
    const dataClone = Object.assign({}, data);

    for (const value of Object.keys(dataClone)) {
      const v = value as keyof typeof dataClone;

      dataClone[v] = !dataClone[v] ? "" : dataClone[v];
    }

    return this.request("/auth/register", "POST", {
      body: dataClone,
    });
  }

  static login(data: loginState) {
    const dataClone = Object.assign({}, data);

    for (const value of Object.keys(dataClone)) {
      const v = value as keyof typeof dataClone;

      dataClone[v] = !dataClone[v] ? "" : dataClone[v];
    }

    return this.request("/auth/login", "POST", {
      body: dataClone,
    });
  }
}
