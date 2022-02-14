import API from "../api";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../components/interactive/button";
import { useUser } from "../components/user";
import { LogoutIcon } from "@heroicons/react/outline";
import { DiscordWhite } from "../../public/svgs";

export default function Discord() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (user.discordId) {
      router.push("/dashboard");
    }
  }, [router, user]);

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

            <span className="block w-full rounded-md shadow-sm mt-8">
              <Link href="https://api.kythi.com/discord/link" passHref>
                <Button cname="w-full">
                  <div className="flex justify-center">
                    <DiscordWhite />
                    <div className="mt-[2px]">Link Discord</div>
                  </div>
                </Button>
              </Link>
            </span>
            <span className="block w-full rounded-md shadow-sm mt-2">
              <Button
                variant="danger"
                cname="w-full"
                onClick={async () => {
                  try {
                    await API.logOut();
                  } finally {
                    // @ts-expect-error
                    setUser(null);
                    router.push("/");
                  }
                }}
              >
                <div className="flex justify-center">
                  <LogoutIcon className="h-6 w-6 text-white" />
                  <div className="mt-[2px]">Logout</div>
                </div>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
