import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../components/user";
import API from "../api";

export default function Discord() {
  const router = useRouter();
  const { user } = useUser();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   } else if (user.discordId) {
  //     router.push("/dashboard");
  //   }
  // }, [router, user]);

  return (
    <>
      <div className="bg-polar-100">
        <div className="flex justify-center items-center h-screen grid-rows-1 px-4">
          <div className="text-center p-10 lg:w-1/3 bg-polar-200 rounded-lg shadow-2xl">
            <h1 className="lg:text-4xl text-3xl font-bold text-snow-200">
              Kythi • Discord Link
            </h1>
            <p className="text-xl text-snow-100 mt-4">
              Welcome to Kythi! Thank you for signing up to our service. To use
              our service you need to link your discord
            </p>

            <span className="block w-full rounded-md shadow-sm mt-12">
              <Link href="https://api.kythi.com/discord/link" passHref>
                <button
                  type="button"
                  className="btn border-0 w-full btn-sm h-9 font-medium rounded-md transform-lowercase bg-[#5865F2] hover:bg-[#7289DA] shadow-lg normal-case"
                >
                  <svg
                    className="h-6 w-6 pr-2"
                    fill="none"
                    viewBox="0 0 71 55"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="#ffffff"
                    />
                  </svg>
                  Link Discord
                </button>
              </Link>
            </span>
            <span className="block w-full rounded-md shadow-sm mt-3">
              <button
                type="button"
                className="btn border-0 w-full btn-sm h-9 font-medium rounded-md transform-lowercase bg-aurora-red-200 hover:bg-aurora-red-400 shadow-lg normal-case"
                onClick={() => {
                  API.logOut()
                    .then(() => router.push("/"))
                    .catch(() => router.push("/"));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
