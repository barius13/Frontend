import React from "react";
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

      <div className="bg-polar-100">
        <div className="flex justify-center items-center h-90vh p-2 pt-12">
          <div className="text-center bg-polar-200 rounded-md lg:px-6 md:px-6 px-3 py-4 text-white">
            <h1 className="text-lg font-semibold text-snow-300 mt-3 flex">
              Profile Settings
            </h1>
            <span className="text-snow-300 flex mr-auto text-sm">
              Signed in as&nbsp;
              <strong>{user.username}</strong>, {user.email}
            </span>

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
                cname="md:w-36 w-full lg:w-36 lg:mt-6 md:mt-6 mt-2"
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
        </div>
      </div>
    </>
  ) : null;
}
