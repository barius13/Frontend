import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";

export default function Suggest() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (!user.discordId) {
      router.push("/discord");
    }
  }, [router, user]);

  return user ? (
    <>
      <Toaster />

      <div className="flex flex-col justify-center items-center h-screen p-4">
        <div className="bg-polar-200 rounded-md p-6 lg:w-3/12">
          <h1 className="text-4xl font-bold text-snow-300">Suggestion Form</h1>
          <h2 className="mt-3 font-semibold text-snow-100">
            Thank you for using our service! We are delighted that you have a
            suggestion to make! Please fill out the form below and we will get
            back to you as soon as possible!
          </h2>
          <textarea
            placeholder="Suggestion Description"
            className="bg-polar-300 mt-3 h-32 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
          />
          <button
            onClick={() => {
              sendToast("Successfully Sent Suggestion!", "success");
            }}
            className="bg-polar-300 w-full btn border-0 hover:bg-polar-400 capitalize cursor-pointer text-center text-white font-medium py-2 px-4 mt-4 transition duration-500"
          >
            Submit Suggestion
          </button>
        </div>
      </div>
    </>
  ) : null;
}
