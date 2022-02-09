import { Toaster } from "react-hot-toast";
import Button from "../components/button";
import { sendToast } from "../utils/sendToast";
import { AtSymbolIcon } from "@heroicons/react/outline";

export default function PasswordReset() {
  return (
    <>
      <Toaster />
      <div className="bg-polar-100 mx-auto sm:px-6">
        <div className="flex justify-center items-center h-screen">
          <form className="w-full max-w-md">
            <div className="rounded-lg bg-polar-200 px-8 py-8">
              <div className="divide-y-2 divide-frost-300">
                <div className="text-white font-bold text-xl mb-2">
                  Password Reset
                </div>
                <div />
              </div>
              <label className="relative block mt-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <AtSymbolIcon className="w-6 h-6 text-white" />
                </span>
                <input
                  className="placeholder:text-gray-400 block bg-polar-600 hover:bg-polar-400 text-white transition duration-700 delay-50 w-full h-8 focus:outline-none caret-white rounded-md py-2 pl-10 shadow-sm sm:text-sm"
                  placeholder="Email Address"
                  type="text"
                  name="email"
                />
              </label>
              <div className="mt-4">
                <Button
                  cname="w-full"
                  onClick={() =>
                    sendToast(
                      "Successfully sent instructions on how to reset your password.",
                      "success"
                    )
                  }
                >
                  Send Reset Link
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
