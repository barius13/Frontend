import API from "../api";
import Link from "next/link";
import { UserEmbed } from "../typings";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Toggle from "../components/toggle";
import { useEffect, useState } from "react";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";

export default function Config() {
  const router = useRouter();
  const { user } = useUser();
  const [Embed, setEmbed] = useState(false);
  const [userEmbeds] = useState(user?.embeds);
  const [Faketoggled, setFake] = useState(false);
  const [currentEmbed, setCurrentEmbed] = useState(user?.embeds[0]);

  function updateEmbed(k: keyof UserEmbed, v: string | boolean | null) {
    if (typeof v === "string" && !!!v) v = null;

    setCurrentEmbed({ ...currentEmbed, [k]: v });
  }

  function formatEmbedString(str: string) {
    return str
      .replaceAll(/:username:/gi, user.username)
      .replaceAll(/:filename:/gi, "ilysmbidkhttybikydlmb:(.png")
      .replaceAll(/:uploadcount:/gi, user.upload.count.toString())
      .replaceAll(/:filesize:/gi, "420.69 KB")
      .replaceAll(/:date(-[^}]+)?:/gi, new Date().toLocaleDateString())
      .replaceAll(/:time(-[^}]+)?:/gi, new Date().toLocaleTimeString())
      .replaceAll(/:timestamp(-[^}]+)?:/gi, new Date().toLocaleString());
  }

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    user &&
    user.discordId &&
    userEmbeds &&
    currentEmbed && (
      <>
        <Toaster />
        <Nav page="config" />

        <main className="bg-polar-100 h-max py-2 px-4 pb-80 text-white">
          <div className="text-white">
            <div className="flex flex-col lg:flex-row md:flex-row md:space-x-4 space-y-2 md:space-y-0 lg:space-y-0 lg:space-x-4 px-10 mt-10">
              <div className="bg-polar-200 rounded-md p-6 py-8">
                <h1 className="text-2xl">Downloads</h1>
                <div className="lg:w-96">
                  <div className="mt-2 text-snow-100 mb-3">
                    Configs are created for screenshot uploaders such as the
                    ones listed below, it allows a user to quickly take images &
                    videos aswell as upload them through the use of a keybind.
                  </div>
                  <div className="flex flex-col md:flex-col space-x-0 lg:flex-row lg:space-x-2 md:space-x-0">
                    <button className="btn w-full border-0 btn-sm h-10 mt-2 normal-case bg-frost-400 hover:bg-frost-300 duration-300 ">
                      ShareX
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
                    Domains are perfect for customising your screenshots as they
                    allow you to set a custom domain for your screenshots.
                  </div>
                  <div className="mt-4 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 bg-zinc-700 p-2 text-white text-sm rounded-l">
                      https://
                    </span>
                    <input
                      className="px-2 bg-polar-300 border-r-polar-400 border-r-2 focus:outline-none w-32 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                      placeholder="Subdomain"
                    />
                    <input
                      className="px-2 bg-polar-300 focus:outline-none w-28 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                      placeholder="domain"
                    />
                    <span className="inline-flex items-center px-3 bg-zinc-700 p-2 text-white text-sm ">
                      /
                    </span>
                    <input
                      className="px-2 bg-polar-300 focus:outline-none w-32 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400 rounded-r"
                      placeholder="Filepath"
                    />
                  </div>
                  <div className="text-snow-100 mt-2">
                    Your Selected domain is: Roblox.Kythi.pics/penis
                  </div>
                  <h1 className="mt-2 text-xl text-slate-200 font-medium">
                    Domain Options
                  </h1>
                  <div className="flex flex-row space-x-3 mt-2">
                    <div className="space-x-1">
                      <Toggle
                        label="Toggle Fake"
                        checked={Faketoggled}
                        onChange={setFake}
                      />
                    </div>
                    <span>Fake URL</span>
                    <span>Fake URL</span>
                    <span>Fake URL</span>
                    <span>Fake URL</span>
                    <span>Fake URL</span>
                    <button
                      onClick={() => setEmbed(true)}
                      className="bg-frost-400 hover:bg-frost-300 duration-300 btn normal-case border-0 mt-3 btn-sm h-10"
                    >
                      Edit Embed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {Embed && (
          <>
            <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="mx-auto p-4">
                <div className="rounded-lg bg-polar-200 p-6">
                  <div className="flex justify-between text-white">
                    <h1 className="font-semibold text-2xl">
                      Discord Embed Editor
                    </h1>
                    <button
                      onClick={() => setEmbed(false)}
                      className="bg-polar-300 border-0 w-8 h-8 normal-case hover:bg-polar-400 text-sm rounded-md cursor-pointer text-center text-white font-medium mt-1 transition duration-500"
                    >
                      X
                    </button>
                  </div>
                  <div className="divide-y-2 mt-3 divide-white">
                    <div />
                    <div />
                  </div>
                  <div className="rounded-md bg-polar-200 flex text-white">
                    <div>
                      <div>
                        <div className="flex flex-col mb-4 mt-2">
                          <span className="text-snow-100">
                            There is many placeholders, to view them type : for
                            options
                          </span>

                          <div className="mt-3 flex">
                            <span className="inline-flex border-0 items-center px-3 bg-zinc-700 p-2 text-white text-sm rounded-l">
                              https://
                            </span>
                            <input
                              name="siteUrl"
                              spellCheck="false"
                              placeholder="SiteName Url"
                              value={currentEmbed.siteUrl && currentEmbed.siteUrl.match(/https?:\/\//i) ? currentEmbed.siteUrl.replace(/https?:\/\//i, "") : currentEmbed.siteUrl ?? ""} 
                              onChange={(ctx) => {
                                updateEmbed("siteUrl", ctx.target.value);
                              }}
                              className="bg-polar-300 w-full rounded-r p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                            />
                          </div>
                          <input
                            name="siteText"
                            spellCheck="false"
                            placeholder="SiteName"
                            value={currentEmbed.siteText ?? ""}
                            onChange={(ctx) => {
                              updateEmbed("siteText", ctx.target.value);
                            }}
                            className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                          />
                          <div className="flex mt-3">
                            <span className="inline-flex border-0 items-center px-3 bg-zinc-700 p-2 text-white text-sm rounded-l">
                              https://
                            </span>
                            <input
                              name="authorUrl"
                              spellCheck="false"
                              placeholder="Author Url"
                              value={currentEmbed.authorUrl && currentEmbed.authorUrl.match(/https?:\/\//i) ? currentEmbed.authorUrl.replace(/https?:\/\//i, "") : currentEmbed.authorUrl ?? ""}
                              onChange={(ctx) => {
                                updateEmbed("authorUrl", ctx.target.value);
                              }}
                              className="bg-polar-300 w-full rounded-r-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                            />
                          </div>
                          <input
                            name="authorText"
                            spellCheck="false"
                            placeholder="Author"
                            value={currentEmbed.authorText ?? ""}
                            onChange={(ctx) => {
                              updateEmbed("authorText", ctx.target.value);
                            }}
                            className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                          />
                          <input
                            name="title"
                            spellCheck="false"
                            placeholder="Title"
                            value={currentEmbed.title ?? ""}
                            onChange={(ctx) => {
                              updateEmbed("title", ctx.target.value);
                            }}
                            className="bg-polar-300 w-full mt-3 rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                          />
                          <input
                            name="description"
                            spellCheck="false"
                            placeholder="Description"
                            value={currentEmbed.description ?? ""}
                            onChange={(ctx) => {
                              updateEmbed("description", ctx.target.value);
                            }}
                            className="bg-polar-300 mt-3 mb-2 h-10 rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label
                          onClick={() => {
                            API.updateEmbedSettings(currentEmbed.id, {
                              enabled: currentEmbed.enabled,
                              color: currentEmbed.color ?? "",
                              siteText: currentEmbed.siteText,
                              siteUrl: currentEmbed.siteUrl,
                              authorText: currentEmbed.authorText,
                              authorUrl: currentEmbed.authorUrl,
                              title: currentEmbed.title,
                              description: currentEmbed.description,
                            }).then((data) => {
                              sendToast(data.message, "success");
                            }).catch((err) => {
                              sendToast(err.data.message, "error");
                            });
                          }}
                          className="bg-[#239d56] btn hover:bg-[#1f8b4d] capitalize cursor-pointer text-center text-white font-medium border-0"
                        >
                          Save Changes
                        </label>
                        <div className="mt-3 flex justify-center space-x-4">
                          <button
                            onClick={() => {
                              sendToast(
                                "Successfully deleted preset!",
                                "success"
                              );
                            }}
                            className="bg-aurora-red-200 text-sm hover:bg-aurora-red-400 duration-300 normal-case btn border-0 w-56"
                          >
                            Delete Preset
                          </button>
                          <button
                            onClick={() => {
                              sendToast(
                                "Successfully created preset!",
                                "success"
                              );
                            }}
                            className="bg-[#239d56] hover:bg-[#1f8b4d] duration-300 text-sm btn normal-case border-0 w-56"
                          >
                            Create Preset
                          </button>
                        </div>
                        <div className="btn-group flex justify-center mt-4">
                          <button className="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200">
                            {"<"}
                          </button>
                          {userEmbeds.map((embed, index) => {
                            return (
                              <button
                                key={index}
                                className={`
                                btn normal-case ${
                                  currentEmbed.id === embed.id
                                    ? "bg-polar-400 hover:bg-polar-500"
                                    : "bg-polar-300 hover:bg-polar-400"
                                }  transition duration-200
                              `}
                                onClick={() => {
                                  setCurrentEmbed(embed);
                                }}
                              >
                                {index + 1}
                              </button>
                            );
                          })}
                          <button className="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200">
                            {">"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="discord-embed shadow-md border-l-discord-light_blue border-l-4 rounded-sm bg-discord-base mt-10 mb-3 ml-10">
                        <div className="embed pt-2 pr-4 pb-4 pl-3 font-discord-site">
                          <div className="embed-site mt-2 antialiased font-light text-site text-discord-site bg-discord-base font-whitney">
                            {formatEmbedString(currentEmbed.siteText ?? "")}
                          </div>
                          <div className="embed-author mt-2 font-bold antialiased text-author font-whitney">
                            {currentEmbed.siteUrl ? (
                              <Link href={`https://${currentEmbed.siteUrl}`}>
                                <a className="hover:underline" target="_blank">
                                  {formatEmbedString(
                                    currentEmbed.siteText ?? ""
                                  )}
                                </a>
                              </Link>
                            ) : (
                              formatEmbedString(currentEmbed.siteText ?? "")
                            )}
                          </div>
                          <div className="embed-title mt-2 font-semibold subpixel-antialiased text-title font-whitney">
                            <Link href="https://kythi.pics/ilysmbidkhttybikydlmb:(">
                              <a
                                target="_blank"
                                className="text-discord-blue cursor-pointer hover:underline"
                              >
                                {formatEmbedString(currentEmbed.title ?? "")}
                              </a>
                            </Link>
                          </div>
                          <div className="embed-desc mt-2 font-normal subpixel-antialiased text-desc text-gray-300 max-w-sm font-whitney">
                            {formatEmbedString(currentEmbed.description ?? "")}
                          </div>
                          <div className="image h-img mt-4">
                            {/* eslint-disable-next-line */}
                            <img
                              className="h-img rounded-sm"
                              src="https://www.slashgear.com/wp-content/uploads/2021/05/Discord_IAP_KeyVisuals_Header_02-1-1280x720.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-10 flex flex-col space-y-2">
                        <div>
                          <Toggle
                            label="Toggle Embed:"
                            checked={currentEmbed.enabled}
                            onChange={(val) => {
                              updateEmbed("enabled", val);
                            }}
                          />
                        </div>
                        <div>
                          <Toggle
                            label="Random Color:"
                            checked={currentEmbed.color === "RANDOM"}
                            onChange={(val) => {
                              updateEmbed("color", val ? "RANDOM" : "#000000");
                            }}
                          />
                        </div>
                        <div
                          className={`cursor-pointer label ${
                            currentEmbed.color === "RANDOM" && "hidden"
                          }`}
                        >
                          <span>Embed Color: </span>
                          <input
                            name="color"
                            type="color"
                            className="bg-polar-200 ml-auto"
                            value={
                              currentEmbed.color === "RANDOM"
                                ? "#000000"
                                : currentEmbed.color ?? ""
                            }
                            onChange={(ctx) => {
                              updateEmbed("color", ctx.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-30 fixed inset-0 bg-black" />
          </>
        )}
      </>
    )
  );
}
