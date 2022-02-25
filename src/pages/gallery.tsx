import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import Nav from "../components/navigators/navbar";
import Button from "../components/interactive/button";
import { ClipboardIcon, TrashIcon } from "@heroicons/react/outline";

export default function Gallery() {
  const router = useRouter();
  const { user } = useUser();
  const [pages] = useState(() => {
    const imgs = user?.uploads;
    const returnPages = [];
    const pageCount = Math.ceil(imgs.length / 12);

    for (let i = 0; i !== pageCount; i++) {
      returnPages.push({
        page: i,
        imgs: imgs.slice(i == 1 ? 12 : i * 12, (i + 1) * 12),
      });
    }

    return returnPages;
  });
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function formatBytes(bytes: number): string {
    if (bytes === 0) return "0 B";

    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
  }

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
          <div className="flex md:items-center md:ml-0 ml-5 mt-3 mb-5 flex-col">
            <span className="text-5xl font-bold text-snow-300">Gallery</span>
            <span className="text-2xl font-medium text-snow-100">
              The perfect area to view & manage your uploaded files.
            </span>
          </div>
        </div>
        {user.uploads.length ? (
          <>
            <div className="btn-group flex flex-wrap ml-12 mb-4">
              <Button
                cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200 mr-2"
                onClick={() => {
                  setCurrentPage(
                    (currentPage) =>
                      pages.find(
                        (page) => page.page === currentPage.page - 1
                      ) ?? currentPage
                  );
                }}
              >
                {"<"}
              </Button>
              {pages.map((page, index) => {
                return (
                  <Button
                    variant="none"
                    key={index}
                    cname={`
                                btn normal-case ${
                                  currentPage.page === page.page
                                    ? "bg-polar-400 hover:bg-polar-500"
                                    : "bg-polar-300 hover:bg-polar-400"
                                }  transition duration-200 rounded-lg mr-2
                              `}
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                    {index + 1}
                  </Button>
                );
              })}
              <Button
                cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200"
                onClick={() => {
                  setCurrentPage(
                    (currentPage) =>
                      pages.find(
                        (page) => page.page === currentPage.page + 1
                      ) ?? currentPage
                  );
                }}
              >
                {">"}
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-12 pb-10">
              {currentPage.imgs.map((image, key) => (
                <>
                  <div key={key} className="bg-polar-300 rounded pb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://s3.us-east-2.wasabisys.com/kythi/${image.uploaderId}/${image.cdnName}`}
                      className="h-44 w-full object-cover rounded"
                      alt={""}
                    />
                    <div className="divide-y-2 divide-white">
                      <div />
                      <div />
                    </div>
                    <div className="flex justify-center items-center flex-col mt-4">
                      <span className="text-xl font-semibold">
                        {image.cdnName}
                      </span>
                      <span className="font-bold">
                        File Size -&nbsp;
                        <span className="font-normal">
                          {formatBytes(image.size)}
                        </span>
                      </span>
                      <span className="font-bold">
                        Upload Date -&nbsp;
                        <span className="font-normal">
                          {new Date(image.uploadedAt).toLocaleDateString()}
                        </span>
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
                </>
              ))}
            </div>
          </>
        ) : (
          <p className="text-white flex justify-center font-bold text-2xl">
            No files uploaded yet.
          </p>
        )}
      </div>
    </>
  ) : null;
}
