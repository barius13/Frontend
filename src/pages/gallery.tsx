import { useEffect } from "react";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Button from "../components/button";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import { ClipboardIcon, TrashIcon } from "@heroicons/react/outline";

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
      <div className="text-white">
        <div className="px-6">
          <div className="flex items-center mt-3 mb-10 flex-col ">
            <span className="text-5xl font-bold text-snow-300">Gallery</span>
            <span className="text-2xl font-medium text-snow-100">
              The perfect area to view & manage your uploaded files.
            </span>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-12 pb-10">
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
                  <Button
                    onClick={() =>
                      sendToast(
                        "Successfully copied Image url to clipboard!",
                        "success"
                      )
                    }
                  >
                    <ClipboardIcon className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      sendToast("Successfully deleted image!", "success")
                    }
                  >
                    <TrashIcon className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
}
