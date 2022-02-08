import API from "../api";
import Link from "next/link";
import * as React from "react";
import Button from "../components/button";
import { Toaster } from "react-hot-toast";
import { registerState } from "../typings";
import { sendToast } from "../utils/sendToast";
import {
  Home,
  Gift,
  Spinner,
  EmailAt,
  Padlock,
  EyeShown,
  UserIcon,
  EyeHidden,
} from "../../public/svgs";

export default function Register() {
  const loginShow = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [registerClicked, setRegisterClicked] = React.useState(false);
  const [register, setRegister] = React.useState<registerState>({
    username: null,
    password: null,
    email: null,
    inviteCode: null,
  });

  function updateRegister(k: keyof registerState, v: string | boolean | null) {
    if (typeof v === "string" && !!!v) v = null;

    setRegister({ ...register, [k]: v });
  }

  document.addEventListener(
    "keydown",
    (ctx) => {
      console.log(ctx);

      if (ctx.code === "Enter") {
        document.getElementById("submitButton")?.click();
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
                <div className="flex justify-between">
                  <div className="text-white font-bold text-xl mb-2">
                    Register to Kythi.
                  </div>
                  <Link href="/" passHref>
                    <Button variant="none" cname="text-white">
                      <Home />
                    </Button>
                  </Link>
                </div>
                <div />
              </div>
              <label className="relative block mt-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <UserIcon />
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
                    <Padlock />
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
                    {show ? <EyeShown /> : <EyeHidden />}
                  </Button>
                </label>
              </div>

              <div className="mt-4">
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <EmailAt />
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
<Gift />
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

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button
                    id="submitButton"
                    cname="w-full -mt-1"
                    onClick={() => {
                      if (registerClicked) return;
                      setRegisterClicked(true);

                      API.register(register)
                        .then((data) => {
                          sendToast(data.message, "success");

                          setTimeout(() => {
                            setRegisterClicked(false);
                          }, 1875);
                        })
                        .catch((err) => {
                          sendToast(err.data.message, "error");

                          setTimeout(() => {
                            setRegisterClicked(false);
                          }, 1875);
                        });
                    }}
                  >
                    <div className="flex justify-center">
                      {registerClicked && <Spinner />}
                      Register
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
