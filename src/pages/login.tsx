import API from "../api";
import Link from "next/link";
import { loginState } from "../typings";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import Modal from "../components/interactive/modal";
import Button from "../components/interactive/button";
import {
  UserCircleIcon,
  LockClosedIcon,
  EyeOffIcon,
  EyeIcon,
} from "@heroicons/react/outline";
import { DiscordWhite } from "../../public/svgs";

export default function Login() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const loginShow = () => setShow(!show);
  const [show, setShow] = useState(false);
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
      <div className="bg-polar-100 mx-auto sm:px-6 select-none">
        <div className="flex justify-center items-center h-screen">
          <form className="w-full max-w-md lg:px-0 px-4">
            <div className="rounded-lg bg-polar-200 px-8 py-8">
              <div className="divide-y-2 divide-white">
                <div className="text-white font-bold text-xl mb-2">Login</div>
                <div />
              </div>
              <label className="relative block mt-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <UserCircleIcon className="h-6 w-6 text-[#D8DEE9]" />
                </span>
                <input
                  className="placeholder:text-gray-400 block select-none bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
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
                    <LockClosedIcon className="h-5 w-5 text-[#D8DEE9]" />
                  </span>
                  <input
                    className="placeholder:text-gray-400 select-none block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
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
                      <EyeIcon className="h-5 w-5 text-[#D8DEE9]" />
                    ) : (
                      <EyeOffIcon className="h-5 w-5 text-[#D8DEE9]" />
                    )}
                  </a>
                </label>
              </div>
              <div className="flex justify-between">
                <Modal
                  buttonName="Forgotten Information?"
                  title="Reset Form"
                  text="Forgot your information? You can reset it here!"
                  cname="p-0 bg-polar-200 ml-1 mt-[2px] font-medium shadow-none text-snow-200 hover:text-snow-100 hover:bg-polar-200"
                >
                  <Button
                    variant="none"
                    cname="w-full h-9 mt-3 rounded-lg bg-blue-500 ease-in text-sm"
                  >
                    Resend Verification Email
                  </Button>
                  <Button
                    variant="none"
                    cname="w-full h-9 mt-3 rounded-lg bg-green-600 text-sm"
                  >
                    Reset Password (via email)
                  </Button>
                </Modal>
                <Link href="/register" passHref>
                  <a className="flex ml-1 mt-3 font-medium text-snow-200 hover:text-snow-100 text-sm">
                    Don&apos;t have an account?
                  </a>
                </Link>
              </div>
              <div className="mt-2">
                <span className="block w-full rounded-md shadow-sm">
                <Button
                    id="loginButton"
                    cname="w-full"
                    cooldown={1875}
                    onClick={() => {
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
                        });
                    }}
                  >
                    Login
                  </Button>
                </span>
                <span className="block w-full rounded-md shadow-sm mt-3 text-white text-sm">
                  <Button
                    cname="bg-[#5865F2] hover:bg-[#7289DA] w-full"
                    onClick={() =>
                      (location.href =
                        "https://api.kythi.com/auth/discord/login")
                    }
                  >
                    <div className="flex justify-center">
                      <DiscordWhite />
                      Login With Discord
                    </div>
                  </Button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
