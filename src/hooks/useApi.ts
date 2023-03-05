import { useMemo } from "react";
import { useHTTP } from "./useHTTP";
import { useAuthorization } from "./useAuthorization";
import { AxiosRequestHeaders } from "axios";
import { IUser } from "../models";

const API_URL: string = "https://backend-flu4w4sfwa-lz.a.run.app/api";

interface IApiConfig {
  loader?: boolean | string;
  debug?: boolean;
}

interface IApiAuthorizationSignUpConfig extends IApiConfig {
  email: string;
  lastName: string;
  firstName: string;
  username: string;
  github?: string;
  linkedin?: string;
  experience: EXPERIENCE;
  password: string;
}

enum EXPERIENCE {
  LESS_THAN_YEAR,
  ONE_TO_TWO_YEARS,
  TWO_TO_FIVE_YEARS,
  MORE_THAN_FIVE_YEARS
}

interface IApiAuthorizationSignInConfig extends IApiConfig {
  username: string;
  password: string;
}

interface IApiAuthorizationSignOutConfig extends IApiConfig {}

interface IApiTokenVerifyConfig extends IApiConfig {
  accessToken: string;
  refreshToken: string;
}

interface IApiAccountGetConfig extends IApiConfig {}

interface IApiAccountUpdateConfig extends IApiConfig {
  firstname: string;
  lastname: string;
  oldPassword?: string;
  newPassword?: string;
}

interface IApiAccountActivateConfig extends IApiConfig {
  token: string;
}

interface IApiAccountPasswordResetInitConfig extends IApiConfig {
  email: string;
}

interface IApiAuthorizationResendActivationConfig extends IApiConfig {
  email: string;
}

interface IApiAccountPasswordResetCompleteConfig extends IApiConfig {
  resetToken: string;
  newPassword: string;
}

export interface IUseApi {
  authorization: {
    signUp: (config: IApiAuthorizationSignUpConfig) => Promise<{ jsonWebToken: string; refreshToken: string; user: IUser }>;
    signIn: (config: IApiAuthorizationSignInConfig) => Promise<{ jsonWebToken: string; refreshToken: string; user: IUser }>;
    signOut: (config: IApiAuthorizationSignOutConfig) => Promise<void>;
    resendActivation: (config: IApiAuthorizationResendActivationConfig) => Promise<void>;
  };
  token: {
    verify: (config: IApiTokenVerifyConfig) => Promise<{ valid: boolean }>;
  };
  account: {g
    info: {
      get: (config: any) => Promise<IUser>;
    },
    get: (config: IApiAccountGetConfig) => Promise<any>;
    update: (config: IApiAccountUpdateConfig) => Promise<any>;
    activate: (config: IApiAccountActivateConfig) => Promise<any>;
    password: {
      reset: {
        init: (config: IApiAccountPasswordResetInitConfig) => Promise<void>;
        complete: (config: IApiAccountPasswordResetCompleteConfig) => Promise<void>;
      };
    };
  };
}

type TUseApi = () => IUseApi;

export const useApi: TUseApi = (): IUseApi => {
  const http = useHTTP();
  const { isAuthorized, accessToken } = useAuthorization();

  const headers: AxiosRequestHeaders = useMemo<AxiosRequestHeaders>(() => {
    const _headers: any = {};

    if (isAuthorized) {
      _headers["Authorization"] = `Bearer ${accessToken}`;
    }

    _headers["Access-Control-Allow-Origin"] = "*";
    _headers["Content-Type"] = "application/json";

    return _headers;
  }, [ isAuthorized, accessToken ]);

  return {
    authorization: {
      signUp: ({ email, lastName, firstName, username, github, linkedin, experience, debug, password, loader }) => {
        const body = {
          userName: username,
          firstName: firstName,
          lastName: lastName,
          password: password,
          passwordConfirmation: password,
          email: email,
          github: github,
          linkedin: linkedin,
          experience: experience,
        };
        return new Promise((resolve, reject) => {
          http.request<{ jsonWebToken: string; refreshToken: string; user: IUser }>({
            method: "POST",
            url: `${API_URL}/users/registration`,
            headers,
            data: body,
            loader: !!loader ? loader : "Processing sign up...",
          })
            .then(resolve)
            .catch(reject);
        });
      },
      signIn: ({ loader, debug, password, username }) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();

          formData.append("username", username);
          formData.append("password", password);

          http.request<any>({
            method: "POST",
            url: `${API_URL}/users/authentication`,
            headers: { "Content-Type": "multipart/form-data" },
            data: formData,
            loader: !!loader ? loader : "Processing sign in...",
            debug,
          })
            .then(resolve)
            .catch(reject);
        });
      },
      signOut: ({ loader }) => {
        return new Promise((resolve, reject) => {
          http.request<void>({
            method: "POST",
            url: `${API_URL}/account/logout`,
            headers,
            loader: !!loader ? loader : "Processing sign out...",
          })
            .then(resolve)
            .catch(reject);
        });
      },
      resendActivation: ({ email, loader }) => {
        return new Promise((resolve, reject) => {
          http.request<void>({
            method: "POST",
            url: `${API_URL}/account/resend-activation-email`,
            headers,
            data: { email },
            loader: !!loader ? loader : "Sending activation link...",
          })
            .then(resolve)
            .catch(reject);
        });
      },
    },
    token: {
      verify: ({ accessToken, loader }) => {
        return new Promise((resolve, reject) => {
          http.request<{ valid: boolean }>({
            method: "POST",
            url: `${API_URL}/token/verify`,
            headers,
            data: { access_token: accessToken },
            loader: !!loader ? loader : false,
          })
            .then(resolve)
            .catch(reject);
        });
      },
    },
    account: {
      get: ({ loader }) => {
        return new Promise((resolve, reject) => {
          http.request<any>({
            method: "GET",
            url: `${API_URL}/account`,
            headers,
            loader: !!loader ? loader : "Loading users...",
          })
            .then(resolve)
            .catch(reject);
        });
      },
      info: {
        get: ({ jsonWebToken, loader }) => {
          const _headers: any = {};
          _headers["Authorization"] = `Bearer ${jsonWebToken}`;

          _headers["Access-Control-Allow-Origin"] = "*";
          _headers["Content-Type"] = "application/json";
          return new Promise((resolve, reject) => {
            http.request<IUser>({
              method: "GET",
              url: `${API_URL}/users/current`,
              headers: _headers,
              loader: !!loader ? loader : false,
            })
              .then(resolve)
              .catch(reject);
          });
        },
      },
      update: ({ firstname, lastname, oldPassword, newPassword, loader }) => {
        const body = {
          first_name: firstname,
          last_name: lastname,
          old_password: oldPassword,
          new_password: newPassword,
        };
        return new Promise((resolve, reject) => {
          http.request<any>({
            method: "PUT",
            url: `${API_URL}/account`,
            headers,
            data: body,
            loader: !!loader ? loader : false,
          })
            .then(resolve)
            .catch(reject);
        });

      },
      activate: ({ loader, token }) => {
        return new Promise((resolve, reject) => {
          http.request<void>({
            method: "POST",
            url: `${API_URL}/account/activate`,
            headers,
            data: { token },
            loader: !!loader ? loader : false,
          })
            .then(resolve)
            .catch(reject);
        });
      },
      password: {
        reset: {
          init: ({ loader, email }) => {
            return new Promise((resolve, reject) => {
              http.request<void>({
                method: "POST",
                url: `${API_URL}/account/password-reset/init`,
                headers,
                data: { email },
                loader: !!loader ? loader : false,
              })
                .then(resolve)
                .catch(reject);
            });
          },
          complete: ({ newPassword, resetToken, loader }) => {
            const body = {
              new_password: newPassword,
              reset_token: resetToken,
            };
            return new Promise((resolve, reject) => {
              http.request<void>({
                method: "POST",
                url: `${API_URL}/account/password-reset/complete`,
                headers,
                data: body,
                loader: !!loader ? loader : false,
              })
                .then(resolve)
                .catch(reject);
            });
          },
        },
      },
    },
  };
};
