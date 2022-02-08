import { Toaster } from "react-hot-toast";
import Button from "../components/button";
import { sendToast } from "../utils/sendToast";

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
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
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
