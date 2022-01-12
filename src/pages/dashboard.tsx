import Link from "next/link";
import { useEffect } from "react";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { useUser } from "../components/user";
import StatsBox from "../components/userstats";

export default function Dashboard() {
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
      <Nav page={"dash"} />
      <body className="bg-polar-100 h-max">
        <div className="flex flex-col items-center justify-center mt-10 px-10">
          <div className="w-11/12">
            <div className="text-3xl font-semibold">
              Welcome, {user.username}
            </div>
            <div className="text-xl text-snow-300 lg:mb-8 mb-4">
              Member since Dec 3, 2021
            </div>
          </div>
          <div className="grid items-stretch lg:grid-cols-3 gap-3 text-white w-11/12">
            <div>
              <StatsBox
                title="Uploads"
                content="600"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EBCB8B"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                }
              />
            </div>
            <div>
              <StatsBox
                title="Storage"
                content="350mb"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#BF616A"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                }
              />
            </div>
            <div>
              <StatsBox
                title="Latency"
                content="69ms"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#B48EAD"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg mt-10 lg:h-auto md:h-auto w-auto">
              <div className="flex items-baseline justify-between ">
                <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                  Quick Links
                </h4>
              </div>
              <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                <div />
                <div />
              </div>
              <Link href="/config" passHref>
                <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-aurora-red-200 hover:bg-aurora-red-300 shadow-lg transition duration-700 mt-6">
                  Embed Customisations
                </button>
              </Link>
              <Link href="/config" passHref>
                <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700 mt-4">
                  Config Downloads
                </button>
              </Link>
              <Link href="/submit" passHref>
                <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700 mt-4">
                  Submit a Testimonal
                </button>
              </Link>
              <Link href="/suggest" passHref>
                <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700 mt-4">
                  Suggest a feature
                </button>
              </Link>
              <Link href="/report" passHref>
                <button className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-frost-400 hover:bg-frost-300 shadow-lg transition duration-700 mt-4">
                  Report a bug
                </button>
              </Link>
            </div>
            <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg mt-10 lg:h-auto md:h-auto w-auto">
              <div className="flex items-baseline justify-between ">
                <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                  Recently uploaded File.
                </h4>
              </div>
              <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                <div />
                <div />
              </div>
              <div className="w-full mt-3 hover:shadow-xl duration-700">
                <img
                  src="https://nyc3.digitaloceanspaces.com/kythi.pics/dfa6659b-46f9-5521-9452-6e08f897e59e/6bIAOKVh0b.png"
                  alt="Recently Uploaded Image"
                />
                <div className="divide-y-2 divide-aurora-red-300">
                  <div />
                  <div />
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 bg-polar-400 rounded-md px-4 border-l-frost-300 border-l-2 py-4 ">
                <div className="flex items-center">
                  <img
                    src={user.discord?.avatar as string}
                    className="w-8 h-8 rounded-full mr-2"
                    alt="User Avatar"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-snow-300">
                      You, {user.username}
                    </span>
                    <span className="text-xs font-medium text-snow-100">
                      2 hours ago
                    </span>
                  </div>
                </div>
                <label
                  htmlFor="Delete-Image"
                  className="hover:text-white btn-outline hover:bg-aurora-red-100 w-24 h-11 rounded-md cursor-pointer text-center text-white font-medium py-2 px-4 transition duration-500"
                >
                  Delete
                </label>
                <input
                  type="checkbox"
                  id="Delete-Image"
                  className="modal-toggle"
                />
                <div className="modal px-16 lg:h-auto md:h-auto h-2/4 bg-black bg-opacity-25 transition duration-200">
                  <div className="modal-box py-6 px-8 rounded-md bg-polar-100 shadow-2xl lg:w-1/3">
                    <h1 className="font-semibold text-xl mb-2">Delete Image</h1>
                    <span className="text-snow-200">
                      Are you sure you want to delete this File? This action is
                      not reversible. This will permanently delete the File from
                      our servers. This action is irreversible!
                    </span>
                    <div className="modal-action space-x-2">
                      <label
                        htmlFor="Delete-Image"
                        className="ml-auto bg-aurora-red-400 hover:bg-aurora-red-100 w-24 h-11 rounded-md cursor-pointer text-center text-white font-medium py-2 px-4 mt-4 transition duration-500"
                      >
                        Delete
                      </label>
                      <label
                        htmlFor="Delete-Image"
                        className="bg-polar-200 hover:bg-polar-400 w-24 h-11 rounded-md cursor-pointer text-center text-white font-medium py-2 px-4 mt-4 transition duration-500"
                      >
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg mt-10 lg:h-auto md:h-auto w-auto lg:mb-0 md:mb-0 mb-8">
              <div className="flex items-baseline justify-between ">
                <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                  Updates, News, and Announcements.
                </h4>
              </div>
              <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                <div />
                <div />
              </div>
              <p className="bg-polar-400 py-2 px-2 rounded-md border-l-frost-300 border-l-2 mt-8 text-snow-200">
                Welcome to kythi we thank you for taking an interest in our
                service! We are currently in beta and we are working on a lot of
                features and bug fixes. We will be adding more features and bug
                fixes in the future. We hope you enjoy your stay!
              </p>
              <div className="flex items-center justify-between mt-2 bg-polar-400 rounded-md px-2 border-l-frost-300 border-l-2">
                <div className="flex items-center mb-4 mt-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    alt="User Avatar"
                    src={user.discord?.avatar}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-snow-300">
                      {user.username} - Admin
                    </span>
                    <span className="text-sm font-medium text-snow-100">
                      2 hours ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  ) : null;
}
