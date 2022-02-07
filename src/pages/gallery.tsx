import { useEffect } from "react";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { useUser } from "../components/user";
import { Toaster } from "react-hot-toast";
import { sendToast } from "../utils/sendToast";

export default function Gallery() {
  const router = useRouter();
  const { user } = useUser();
  const images = [
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
    "https://cdn.discordapp.com/attachments/852179226903183381/931547081385054308/unknown.png",
  ];

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />

      <Nav page="gallery" />
      <div className="bg-polar-100 h-max">
        <div className="px-6">
          <div className="flex items-center pt-4 mb-10 flex-col ">
            <span className="text-5xl font-bold text-snow-300">Gallery</span>
            <span className="text-2xl font-medium text-snow-100">
              The perfect area to view & manage your uploaded files.
            </span>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 px-12">
          {images.map((image, key) => (
            <div key={key} className="bg-polar-300 rounded pb-4">
              <img src={image} className="h-44 w-full object-cover rounded" />
              <div className="divide-y-2 divide-white">
                <div />
                <div />
              </div>
              <div className="flex justify-center items-center flex-col mt-4">
                <span className="text-xl font-semibold">roblox.png</span>
                <span className="font-bold">
                  File Size - <span className="font-normal">100mb</span>
                </span>
                <span className="font-bold">
                  Upload Date - <span className="font-normal">23/10/2019</span>
                </span>
                <div className="space-x-2 mt-3">
                  <button className="btn btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-sm bg-aurora-red-200 hover:bg-aurora-red-400 border-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
}
