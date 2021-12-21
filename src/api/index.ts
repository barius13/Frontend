/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, {AxiosRequestHeaders, Method} from 'axios';

interface requestParams {
  body?: any;
  headers?: AxiosRequestHeaders;
}

/**
 * Its the api
 */
export default class API {
  /**
   * Wrapper for making requests
   * @param {string} url The url to send the request to
   * @param {Method} method The method to use for the request
   * @param {requestParams} params The parameters to send with the request
   * @return {Promise<any>} Axios Response
   * @private
   */
  private static async request(
      url: string,
      method: Method,
      {body, headers}: requestParams,
  ): Promise<any> {
    return axios({
      url: `https://api.kythi.com${url}`,
      method,
      headers,
      data: body,
      withCredentials: true,
    });
  }

  /**
   * Requests to register a new user
   * @param {string} username The username
   * @param {string} email The email
   * @param {string} password The password
   * @param {string} inviteCode The invite code to use
   * @param {string} hCaptchaKey The captcha key generated
   * @return {Promise<any>} Any data returned from api
   */
  public static async register(
      username: string,
      email: string,
      password: string,
      inviteCode: string,
      hCaptchaKey: string,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request('/auth/register', 'POST', {
        body: {
          username,
          email,
          password,
          inviteCode,
          hCaptchaKey,
        },
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

  /**
   * Validates the data is acceptable
   * @param {string} username The username
   * @param {string} email The email
   * @param {string} password The password
   * @param {string} inviteCode The invite code to use
   * @return {Promise<any>} Any data returned from api
   */
  public static async validateRegisterParams(
      username: string,
      email: string,
      password: string,
      inviteCode: string,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request(
          `/validate/register${encodeQueryData({
            username,
            email,
            password,
            inviteCode,
          })}`,
          'GET',
          {},
      )
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

  /**
   * Request api to login
   * @param {string} username The username
   * @param {string} password The password
   * @return {Promise<any>} Any data returned from api
   */
  public static async login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request('/auth/login', 'POST', {
        body: {
          username,
          password,
        },
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
      this.request('/', 'GET', {})
          .then(() => {
            resolve(Date.now() - startedAt);
          })
          .catch((err) => {
            reject(err);
          });
    });
  }

  /**
   * Request api to logout
   * @return {Promise<any>} Any data returned from api
   */
  public static async logOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request('/auth/logOut', 'POST', {})
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

  /**
   * Request api for the current session (if any)
   * @return {Promise<any>} Any data returned from api
   */
  public static async getSession(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request('/auth/session', 'GET', {})
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

  /**
   * Requests api for the current statistics
   * @return {Promise<any>} Any data returned from api
   */
  public static async getStats(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request('/stats', 'GET', {})
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
}

/**
 * Transforms an object with data into a query string
 * @param {object} data The data to transform
 * @return {string} The encoded query string
 */
export function encodeQueryData(data: object): string {
  return (
    '?' +
    Object.keys(data).map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
              data[key as keyof object],
          )}`,
    ).join('&')
  );
}
