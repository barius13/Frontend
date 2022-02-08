import API from "../api";
import Link from "next/link";
import { loginState } from "../typings";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Button from "../components/button";
import { useState, useEffect } from "react";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";

export default function Login() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const loginShow = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [login, setLogin] = useState<loginState>({
    username: null,
    password: null,
  });

  useEffect(() => {
    if (user) {
      router.push(
        decodeURIComponent((router.query.redirect as string) ?? "/dashboard")
      );
    }
  }, [user, router]);

  function updateLogin(k: keyof loginState, v: string | boolean | null) {
    if (typeof v === "string" && !!!v) v = null;

    setLogin({ ...login, [k]: v });
  }

  document.addEventListener(
    "keydown",
    (ctx) => {
      if (ctx.code === "Enter") {
        document.getElementById("loginButton")?.click();
      }
    },
    false
  );

  return (
    <>
      <Toaster />
      <div className="bg-polar-100 mx-auto sm:px-6">
        <div className="flex justify-center items-center h-screen">
          <form className="w-full max-w-md lg:px-0 px-4">
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
                  className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                  placeholder={login.username ?? "Username"}
                  type="text"
                  name="username"
                  onChange={(comp) =>
                    updateLogin("username", comp.target.value.trim())
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
                    className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                    placeholder={login.password ?? "Password"}
                    type={show ? "text" : "password"}
                    name="Password"
                    onChange={(comp) =>
                      updateLogin("password", comp.target.value.trim())
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
              <Link href="/reset" passHref>
                <a className="flex ml-1 mt-3 font-medium text-snow-200 hover:text-snow-100 text-sm">
                  Forgotten your password?
                </a>
              </Link>
              <div className="mt-3">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    id="loginButton"
                    cname="w-full"
                    onClick={() => {
                      if (loginClicked) return;
                      setLoginClicked(true);

                      API.login(login)
                        .then((data) => {
                          setUser(data.user);
                          sendToast(data.message, "success");

                          setTimeout(() => {
                            router.push(
                              decodeURIComponent(
                                (router.query.redirect as string) ??
                                  "/dashboard"
                              )
                            );
                          }, 1875);
                        })
                        .catch((err) => {
                          sendToast(err.data.message, "error");

                          setTimeout(() => {
                            setLoginClicked(false);
                          }, 1875);
                        });
                    }}
                  >
                    <div className="flex justify-center">
                      {loginClicked && (
                        <svg
                          className="animate-spin mt-[2.5px] mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      Login
                    </div>
                  </Button>
                </span>
                <span className="block w-full rounded-md shadow-sm mt-3 text-white text-sm">
                  <Link
                    href="https://api.kythi.com/auth/discord/login"
                    passHref
                  >
                    <Button cname="bg-[#5865F2] hover:bg-[#7289DA] w-full">
                    <div className="flex justify-center">
                        <svg
                          className="h-6 w-6 -mt-[2px] pr-2"
                          fill="none"
                          viewBox="0 0 71 55"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                            fill="#ffffff"
                          />
                        </svg>
                        Login With Discord
                      </div>
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
