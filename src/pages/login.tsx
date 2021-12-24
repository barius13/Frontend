export default function Login() {
  return (
    <div className="bg-polar-100 mx-auto sm:px-6">
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-md">
          <div className="rounded-lg bg-polar-200 px-8 py-8">
            <div className="divide-y-2 divide-frost-300">
              <div className="text-white font-bold text-xl mb-2">Login.</div>
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
                placeholder="Username"
                type="text"
                name="username"
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
                  placeholder="Password"
                  type="text"
                  name="Password"
                />
              </label>
            </div>
            <a
              href="/reset-password"
              className="flex ml-1 mt-3 font-medium text-snow-200 hover:text-snow-100 text-sm"
            >
              Forgotten your password?
            </a>
            <div className="mt-3">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700"
                >
                  Sign in
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
