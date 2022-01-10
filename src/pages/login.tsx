import API from "../api";
import * as React from "react";
import { useRouter } from "next/router";
import { useUser } from "../components/user";
import Link from "next/link";

export interface loginState {
  username: string | null;
  password: string | null;
}

export default function Login() {
  const router = useRouter();
  const { setUser } = useUser();
  const loginShow = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [LoginClicked, LoginSetClicked] = React.useState(false);
  const [DiscordClicked, DiscordSetClicked] = React.useState(false);

  const [login, setLogin] = React.useState<loginState>({
    username: null,
    password: null,
  });

  return (
    <div className="bg-polar-100 mx-auto sm:px-6">
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-md">
          <div className="rounded-lg bg-polar-200 px-8 py-8">
            <div className="divide-y-2 divide-frost-300">
              <div className="text-white font-bold text-xl mb-2">
                Login to Kythi.
              </div>
              <div />
            </div>
            <label className="relative block mt-5">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D8DEE9"
                >
                  <path
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <input
                className="placeholder:text-gray-400 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 w-full h-8 rounded-md py-2 pl-10 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
                placeholder={login.username ?? "Username"}
                type="text"
                name="username"
                onChange={(comp) =>
                  setLogin({
                    ...login,
                    username:
                      comp.target.value === "" ? null : comp.target.value,
                  })
                }
              />
            </label>

            <div className="mt-4">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#D8DEE9"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  className="placeholder:text-gray-400 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 w-full h-8 rounded-md py-2 pl-10 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
                  placeholder={login.password ?? "Password"}
                  type={show ? "text" : "password"}
                  name="Password"
                  onChange={(comp) =>
                    setLogin({
                      ...login,
                      password:
                        comp.target.value === "" ? null : comp.target.value,
                    })
                  }
                />
                <a
                  onClick={loginShow}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {show ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#D8DEE9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#D8DEE9"
                    >
                      <path
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </a>
              </label>
            </div>
            <Link href="/reset">
              <a className="flex ml-1 mt-3 font-medium text-snow-200 hover:text-snow-100 text-sm">
                Forgotten your password?
              </a>
            </Link>
            <div className="mt-3">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className={`btn border-0 w-full btn-sm h-9 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700 ${
                    LoginClicked ? "loading" : ""
                  }`}
                  onClick={() => {
                    LoginSetClicked(true);
                    API.login(login)
                      .then((data) => {
                        console.log("Successfully logged in", data);
                        setUser(data.user);
                        setTimeout(() => {
                          router.push("/dashboard");
                        }, 2000);
                      })
                      .catch((err) => {
                        console.log("Error logging in", err);
                        LoginSetClicked(false);
                      });
                  }}
                >
                  {"Sign in"}
                </button>
              </span>
              <span className="block w-full rounded-md shadow-sm mt-3">
                <button
                  type="button"
                  className={`btn border-0 w-full btn-sm h-9 font-medium rounded-md transform-lowercase bg-[#5865F2] hover:bg-[#7289DA] shadow-lg transition duration-700 ${
                    DiscordClicked ? "loading" : ""
                  }`}
                  onClick={() => {
                    DiscordSetClicked(true);

                    location.href = "https://api.kythi.com/discord/login";
                  }}
                >
                  Login with discord.
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
