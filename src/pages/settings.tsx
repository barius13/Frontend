import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import Nav from "../components/navigators/navbar";
import Button from "../components/interactive/button";

export default function Settings() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (!user.discordId) {
      router.push("/discord");
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />
      <Nav page="" />

      <div className="flex justify-center items-center p-2 flex-col">
        <div className="text-center bg-polar-200 rounded-md p-6 mt-24 text-white max-w-xl w-full">
          <h1 className="text-xl font-semibold text-snow-300 mt-3 flex">
            Profile Settings
          </h1>
          <div className="text-snow-300 flex mr-auto text-sm text-left flex-col">
            Signed in as&nbsp;
            {user.username}, {user.email}
          </div>

          <div className="flex mt-3 font-semibold">Username</div>
          <input
            className="mt-2 placeholder:text-gray-400 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 h-8 rounded-md py-2 pl-2 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
            placeholder={user.username}
            type="text"
          />
          <div className="flex mt-3 font-semibold">Password</div>

          <div className="flex lg:flex-row md:flex-row flex-col lg:space-x-2 md:space-x-2 mt-2">
            <input
              className="placeholder:text-gray-400 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 h-8 rounded-md py-2 pl-2 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
              placeholder={"Current Password"}
              type="password"
            />
            <input
              className="placeholder:text-gray-400 md:mt-0 lg:mt-0 mt-2 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 h-8 rounded-md py-2 pl-2 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
              placeholder={"New Password"}
              type="password"
            />
          </div>

          <div className="flex mt-3 font-semibold">Email Address</div>

          <div className="flex lg:flex-row md:flex-row flex-col lg:space-x-2 md:space-x-2 mt-2">
            <input
              className="placeholder:text-gray-400 block bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 h-8 rounded-md py-2 pl-2 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
              placeholder={user.email}
              name="email"
            />
            <input
              className="placeholder:text-gray-400 block lg:mt-0 mt-2 md:mt-0 bg-polar-300 hover:bg-polar-400 caret-white text-white transition duration-700 delay-50 h-8 rounded-md py-2 pl-2 shadow-sm focus:outline-none hover:border-frost-300 hover:ring-frost-300 focus:border-frost-400 focus:ring-frost-400 focus:ring-2 hover:ring-2 sm:text-sm"
              placeholder={"New Email"}
              name="email"
            />
          </div>
          <div className="flex justify-between lg:flex-row md:flex-row flex-col md:space-x-8 lg:space-x-8">
            <span>
              <span className="font-semibold flex mt-3">Delete Account</span>
              <span className="mr-auto flex">
                Upon Deletion you wipe all of your data.
              </span>
            </span>
            <Button
              cname="md:w-36 w-full lg:w-36 lg:mt-6 md:mt-6 mt-2 h-9"
              variant="danger"
              size="md"
              onClick={() =>
                sendToast(
                  "Successfully deleted your account, logging out.",
                  "success"
                )
              }
            >
              Delete Account
            </Button>
          </div>
          <Button
            onClick={() => {
              sendToast("Successfully updated Account Settings.", "success");
            }}
            variant="success"
            cname="w-full mt-2"
          >
            Save Changes
          </Button>
        </div>
        <div className="text-center bg-polar-200 rounded-md lg:px-6 md:px-6 px-3 py-4 text-white max-w-xl w-full mt-3">
          <h2 className="text-xl font-semibold text-snow-300 mt-3 flex mb-1">
            Two Factor Authentication
          </h2>
          <div className="text-snow-300 flex text-sm">
            2fa is currently set as&nbsp;
            <span className="text-red-300">Disabled</span>
          </div>
          <div className="text-snow-300 flex text-xs text-left max-w-lg mt-1">
            <span>
              You will be required to enter code to gain access to your account.
              This code is generated using google authenticator. If you lose
              access to your authenticator app, you will have to contact{" "}
              <Link href="mailto:support@kythi.com" passHref>
                <a
                  href="#"
                  className="hover:text-blue-400 text-blue-300 underline underline-offset-1"
                >
                  <span>Support&nbsp;</span>
                </a>
              </Link>
              to reset your code.
            </span>
          </div>
          <div className="flex justify-between flex-col text-left">
            <Button cname="w-full h-9 mt-3" variant="primary" size="md">
              Enable 2fa
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
