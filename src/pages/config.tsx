import API from "../api";
import Link from "next/link";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import { ChangeEvent, useEffect, useState } from "react";

export default function Config() {
  const router = useRouter();
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentEmbedData, setCurrentEmbedData] = useState(user.embeds[0]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      user.embeds.map((embed) => {
        embed.siteUrl = embed.siteUrl?.replace(/https?:\/\//i, "") ?? null;
        embed.authorUrl = embed.authorUrl?.replace(/https?:\/\//i, "") ?? null;
      });

      setCurrentEmbedData(user.embeds[0]);
    }
  }, [router, user]);

  function updateEmbedData(event: ChangeEvent<HTMLInputElement>) {
    setCurrentEmbedData({
      ...currentEmbedData,
      [event.target.name]:
        event.target.name === "enabled"
          ? event.target.checked
          : event.target.name === "color"
          ? event.target.hasOwnProperty("checked") && event.target.checked
            ? "RANDOM"
            : "#FFFFFF"
          : event.target.value ?? null,
    });
  }

  function formatEmbedString(str: string): string {
    str = str
      .replaceAll(/:username:/gi, user.username)
      .replaceAll(/:filename:/gi, "ilysmbidkhttybikydlmb:(.png")
      .replaceAll(/:uploadcount:/gi, user.upload.count.toString())
      .replaceAll(/:filesize:/gi, "420.69 KB")
      .replaceAll(/:date:/gi, new Date().toLocaleDateString())
      .replaceAll(/:time:/gi, new Date().toLocaleTimeString())
      .replaceAll(/:timestamp:/gi, new Date().toLocaleString());

    let data = str.match(/:(time|timestamp|date)-([^}]+):/i);

    while (data && data.length >= 3) {
      const [match, type, timeZone] = data;

      if (type === "time") {
        str = str.replace(
          match,
          new Date().toLocaleTimeString("en-US", { timeZone })
        );
      } else if (type === "timestamp") {
        str = str.replace(
          match,
          new Date().toLocaleString("en-US", { timeZone })
        );
      } else if (type === "date") {
        str = str.replace(
          match,
          new Date().toLocaleDateString("en-US", { timeZone })
        );
      }

      data = str.match(/:(time|timestamp|date)-([^}]+):/i);
    }

    return str;
  }

  return user && user.discordId ? (
    <>
      <Toaster />

      <Nav page="config" />

      <div className="bg-polar-100 h-max p-12 flex space-x-4">
        <div className="bg-polar-200 rounded-md p-6 py-8">
          <h1 className="text-2xl">Configuration</h1>
          <div className="lg:w-96 ">
            <div className="mt-2 text-snow-100">
              Configs are created for screenshot uploaders such as the ones
              listed below, it allows a user to quickly take images & videos
              aswell as upload them through the use of a keybind.
            </div>
            <div className="grid grid-cols-2 space-x-2">
              <button className="btn w-full border-0 btn-sm h-10 mt-2 normal-case bg-frost-400 hover:bg-frost-300 duration-300 ">
                Sharex
              </button>
              <button className="btn w-full border-0 btn-sm h-10 mt-2 normal-case bg-frost-400 hover:bg-frost-300 duration-300">
                Magic Cap
              </button>
            </div>
          </div>
        </div>
        <div className="bg-polar-200 rounded-md p-6 py-8">
          <h1 className="text-2xl">Domains</h1>
          <div className="lg:w-auto ">
            <div className="mt-2 text-snow-100">
              Domains are perfect for customising your screenshots as they allow
              you to set a custom domain for your screenshots.
            </div>
            <label className="input-group mt-3">
              <span className="bg-polar-600 border-r-2 border-gray-300">
                https://
              </span>
              <input
                name="SubDomain"
                spellCheck="false"
                placeholder="Subdomain Name"
                className="bg-polar-300 border-r-2 p-2 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                onChange={updateEmbedData}
              />
              <input
                name="Domain"
                spellCheck="false"
                placeholder="Domain Name"
                className="bg-polar-300  p-2 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                onChange={updateEmbedData}
              />
              <span className="bg-polar-600 border-l-2 border-l-white">/</span>
              <input
                name="FilePath"
                spellCheck="false"
                placeholder="File Path"
                className="bg-polar-300  rounded-md p-2 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                onChange={updateEmbedData}
              />
            </label>
            <div className="text-snow-100 mt-2">
              Your Selected domain is: Roblox.Kythi.pics/penis
            </div>
          </div>
        </div>
        <label
          htmlFor="Embed-Editor"
          className="bg-frost-400 hover:bg-frost-300 duration-300 btn normal-case border-0 mt-3 btn-sm h-10"
        >
          Edit Embed
        </label>
      </div>

      <input type="checkbox" id="Embed-Editor" className="modal-toggle" />
      <div className="modal duration-200">
        <div className="rounded-md bg-polar-200 p-4 flex">
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold text-2xl mb-4">
                Discord Embed Editor
              </h1>
              <label
                htmlFor="Embed-Editor"
                className="bg-polar-300 border-0 normal-case hover:bg-polar-400 btn btn-sm rounded-md cursor-pointer text-center text-white font-medium mt-1 transition duration-500"
              >
                X
              </label>
            </div>
            <div className="divide-y-2 divide-white">
              <div />
              <div />
            </div>
            <div>
              <div className="flex flex-col mb-4 mt-2">
                <span className="text-snow-100">
                  There is many placeholders, to view them type % for options
                </span>

                <label className="input-group mt-3">
                  <span className="bg-polar-600 border-r-2 border-gray-300">
                    https://
                  </span>
                  <input
                    name="siteUrl"
                    spellCheck="false"
                    placeholder="SiteName Url"
                    className="bg-polar-300 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    value={currentEmbedData.siteUrl ?? ""}
                    onChange={updateEmbedData}
                  />
                </label>

                <input
                  name="siteText"
                  spellCheck="false"
                  placeholder="SiteName"
                  className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                  value={currentEmbedData.siteText ?? ""}
                  onChange={updateEmbedData}
                />

                <label className="input-group mt-3">
                  <span className="bg-polar-600 border-r-2 border-gray-300">
                    https://
                  </span>
                  <input
                    name="authorUrl"
                    spellCheck="false"
                    placeholder="Author Url"
                    className="bg-polar-300 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    value={currentEmbedData.authorUrl ?? ""}
                    onChange={updateEmbedData}
                  />
                </label>

                <input
                  name="authorText"
                  spellCheck="false"
                  placeholder="Author"
                  className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                  value={currentEmbedData.authorText ?? ""}
                  onChange={updateEmbedData}
                />

                <input
                  name="title"
                  spellCheck="false"
                  placeholder="Title"
                  className="bg-polar-300 w-full mt-3 rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                  value={currentEmbedData.title ?? ""}
                  onChange={updateEmbedData}
                />
                <input
                  name="description"
                  spellCheck="false"
                  placeholder="Description"
                  className="bg-polar-300 mt-3 mb-2 h-10 rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                  value={currentEmbedData.description ?? ""}
                  onChange={updateEmbedData}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                onClick={() => {
                  API.updateEmbedSettings(currentEmbedData.id, {
                    enabled: currentEmbedData.enabled,
                    color: currentEmbedData.color as string,
                    siteText: currentEmbedData.siteText,
                    siteUrl: currentEmbedData.siteUrl,
                    authorText: currentEmbedData.authorText,
                    authorUrl: currentEmbedData.authorUrl,
                    title: currentEmbedData.title,
                    description: currentEmbedData.description,
                  })
                    .then((data) => {
                      sendToast(data.message, "success");
                    })
                    .catch((err) => {
                      sendToast(err.data.message, "error");
                    });
                }}
                className="bg-[#239d56] btn hover:bg-[#1f8b4d] capitalize cursor-pointer text-center text-white font-medium border-0"
              >
                Save Changes
              </label>
              <div className="mt-3 flex justify-center space-x-4">
                <label
                  onClick={() => {
                    sendToast("Successfully deleted preset!", "success");
                  }}
                  className="bg-aurora-red-200 hover:bg-aurora-red-400 duration-300 normal-case btn border-0 w-56"
                >
                  Delete Preset
                </label>
                <label
                  onClick={() => {
                    sendToast("Successfully created preset!", "success");
                  }}
                  className="bg-[#239d56] hover:bg-[#1f8b4d] duration-300 btn normal-case border-0 w-56"
                >
                  Create Preset
                </label>
              </div>
              <div className="btn-group flex justify-center mt-4">
                <button className="btn normal-case">{"<"}</button>
                {user.embeds.map((embed, index) => (
                  <button
                    key={index}
                    className={`btn ${
                      currentPage === index && "bg-frost-400 hover:bg-frost-300"
                    }`}
                    onClick={() => {
                      setCurrentPage(index);
                      setCurrentEmbedData(embed);
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
                <button className="btn normal-case"> {">"} </button>
              </div>
            </div>
          </div>
          <div>
            <div className="discord-embed shadow-md border-l-discord-light_blue border-l-4 rounded-sm bg-discord-base mt-10 mb-3 ml-10">
              <div className="embed pt-2 pr-4 pb-4 pl-3 font-discord-site">
                <div className="embed-site mt-2 antialiased font-light text-site text-discord-site bg-discord-base font-whitney">
                  {currentEmbedData.siteUrl ? (
                    <Link href={`https://${currentEmbedData.siteUrl}`} passHref>
                      <a className="hover:underline" target="_blank">
                        {formatEmbedString(currentEmbedData.siteText ?? "")}
                      </a>
                    </Link>
                  ) : (
                    formatEmbedString(currentEmbedData.siteText ?? "")
                  )}
                </div>
                <div className="embed-author mt-2 font-bold antialiased text-author font-whitney">
                  {currentEmbedData.authorUrl ? (
                    <Link
                      href={`https://${currentEmbedData.authorUrl}`}
                      passHref
                    >
                      <a className="hover:underline" target="_blank">
                        {formatEmbedString(currentEmbedData.authorText ?? "")}
                      </a>
                    </Link>
                  ) : (
                    formatEmbedString(currentEmbedData.authorText ?? "")
                  )}
                </div>
                <div className="embed-title mt-2 font-semibold subpixel-antialiased text-title font-whitney">
                  <Link
                    href="https://kythi.pics/ilysmbidkhttybikydlmb:("
                    passHref
                  >
                    <a
                      className="text-discord-blue cursor-pointer hover:underline"
                      target="_blank"
                    >
                      {formatEmbedString(currentEmbedData.title ?? "")}
                    </a>
                  </Link>
                </div>
                <div className="embed-desc mt-2 font-normal subpixel-antialiased text-desc text-gray-300 max-w-sm font-whitney">
                  {formatEmbedString(currentEmbedData.description ?? "")}
                </div>
                <div className="image h-img mt-4">
                  <img
                    className="h-img rounded-sm"
                    src="https://www.slashgear.com/wp-content/uploads/2021/05/Discord_IAP_KeyVisuals_Header_02-1-1280x720.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="ml-10">
              <label className="cursor-pointer label">
                <span>Enable Embed</span>
                <input
                  name="enabled"
                  type="checkbox"
                  className="toggle border-0 bg-polar-200"
                  checked={currentEmbedData.enabled}
                  onChange={updateEmbedData}
                />
              </label>
              <label className="cursor-pointer label">
                <span>Random Color</span>
                <input
                  name="color"
                  type="checkbox"
                  className="toggle border-0 ml-4 bg-polar-200"
                  checked={currentEmbedData.color === "RANDOM"}
                  onChange={updateEmbedData}
                />
              </label>
              <label
                className={`cursor-pointer label ${
                  currentEmbedData.color === "RANDOM" && "hidden"
                }`}
              >
                <span>Embed Color</span>
                <input
                  name="color"
                  type="color"
                  value={currentEmbedData.color ?? "#FFFFFF"}
                  onChange={updateEmbedData}
                  className="bg-polar-100 ml-auto"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
