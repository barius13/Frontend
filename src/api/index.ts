import axios, { AxiosRequestHeaders, Method } from "axios";
import { UserEmbed, loginState, registerState } from "../typings";

interface requestParams {
  body?: object;
  headers?: AxiosRequestHeaders;
}

interface apiLogin extends loginState {
  reCaptchaToken: string | null;
}


interface apiRegister extends registerState {
  reCaptchaToken: string | null;
}

export default class API {
  private static async request(
    url: string,
    method: Method,
    { body, headers }: requestParams
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        url: new URL(url, process.env.API_URL).toString(),
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

  static getCurrentSession() {
    return this.request("/auth/session", "GET", {});
  }

  static logOut() {
    return this.request("/auth/logOut", "POST", {});
  }

  static uploadImage(key: string, data: any): Promise<any>  {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", data);

      if (!data.type.match(/(image|video)\/(png|jpeg|gif|mp4)/i)) {
        reject({
          data: {
            message: "Invalid File Type",
          },
        });
      }

      if (data.size > 100000000) {
        reject({
          data: {
            message: "File is too big. Max file size is 100MB.",
          },
        });
      }

      this.request("/upload", "POST", {
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: key,
        },
      })
        .then(resolve)
        .catch(reject);
    });
  }

  static createEmbed(embed?: Omit<UserEmbed, "id" | "userId">) {
    return this.request("/users/@me/settings/embeds", "POST", {
      body: embed,
    });
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

  static register(data: apiRegister) {
    const dataClone = Object.assign({}, data);

    for (const value of Object.keys(dataClone)) {
      const v = value as keyof typeof dataClone;

      dataClone[v] = !dataClone[v] ? "" : dataClone[v];
    }

    return this.request("/auth/register", "POST", {
      body: dataClone,
    });
  }

  static login(data: apiLogin) {
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
