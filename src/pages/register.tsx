import API from "../api";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { registerState } from "../typings";
import ReCAPTCHA from "react-google-recaptcha";
import { sendToast } from "../utils/sendToast";
import Modal from "../components/interactive/modal";
import Button from "../components/interactive/button";
import {
  GiftIcon,
  EyeIcon,
  EyeOffIcon,
  AtSymbolIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

export default function Register() {
  const loginShow = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [captchaShow, setCaptchaShow] = useState(false);
  const [register, setRegister] = useState<registerState>({
    username: null,
    password: null,
    email: null,
    inviteCode: null,
  });

  function updateRegister(k: keyof registerState, v: string | boolean | null) {
    if (typeof v === "string" && !!!v) v = null;

    setRegister({ ...register, [k]: v });
  }

  return (
    <>
      <Toaster />
      <div className="bg-polar-100 mx-auto sm:px-6">
        <div className="flex justify-center items-center h-screen">
          <form className="w-full max-w-md lg:px-0 px-4">
            <div className="rounded-lg bg-polar-200 p-6">
              <div className="flex justify-between">
                <h1 className="text-white font-bold text-xl">Register</h1>
              </div>
              <label className="relative block mt-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <UserCircleIcon className="h-6 w-6 text-[#D8DEE9]" />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={register.username ?? ""}
                  className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                  onChange={(comp) =>
                    updateRegister("username", comp.target.value)
                  }
                />
              </label>

              <div className="mt-4">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LockClosedIcon className="h-5 w-5 text-[#D8DEE9]" />
                  </span>
                  <input
                    name="password"
                    placeholder="Password"
                    value={register.password ?? ""}
                    type={show ? "text" : "password"}
                    className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                    onChange={(comp) =>
                      updateRegister("password", comp.target.value)
                    }
                  />
                  <Button
                    variant="none"
                    onClick={loginShow}
                    cname="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {show ? (
                      <EyeIcon className="w-5 h-5 text-[#D8DEE9]" />
                    ) : (
                      <EyeOffIcon className="w-5 h-5 text-[#D8DEE9]" />
                    )}
                  </Button>
                </label>
              </div>

              <div className="mt-4">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <AtSymbolIcon className="h-5 w-5 text-[#D8DEE9]" />
                  </span>
                  <input
                    type="email"
                    placeholder="Email-Address"
                    value={register.email ?? ""}
                    className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                    onChange={(comp) =>
                      updateRegister("email", comp.target.value)
                    }
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <GiftIcon className="h-5 w-5 text-[#D8DEE9]" />
                  </span>
                  <input
                    type="text"
                    placeholder="Invite-Code"
                    value={register.inviteCode ?? ""}
                    className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                    onChange={(comp) =>
                      updateRegister("inviteCode", comp.target.value)
                    }
                  />
                </label>
              </div>
              <Link href="/login" passHref>
                <a className="flex ml-1 mt-2 font-medium text-snow-200 hover:text-snow-100 text-sm">
                  Have an account?
                </a>
              </Link>

              <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                  <Modal
                    title="Captcha Verification"
                    text="Complete the captcha to finish registration!"
                    cname="w-full -mt-1 h-9"
                    buttonName="Register"
                    state={[captchaShow, setCaptchaShow]}
                  >
                    <div className="flex justify-center mt-3">
                      <ReCAPTCHA
                        sitekey={process.env.ReCAPTCHA_KEY!}
                        size="normal"
                        theme="dark"
                        onChange={(value) => {
                          API.register({ ...register, reCaptchaToken: value })
                            .then((data) => {
                              sendToast(data.message, "success");
                            })
                            .catch((err) => {
                              sendToast(err.data.message, "error");
                            });

                          setTimeout(() => {
                            setCaptchaShow(false);
                          }, 1250);
                        }}
                      />
                    </div>
                  </Modal>
                </span>
              </div>
            </div>
          </form>
          {/* quite literally only here for the badge */}
          <ReCAPTCHA
            sitekey="6Lf5RnseAAAAABmOZgW-GfybGm3exHBtNStx_ioa"
            size="invisible"
            theme="dark"
          />
        </div>
      </div>
    </>
  );
}
