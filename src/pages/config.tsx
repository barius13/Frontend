import API from "../api";
import Link from "next/link";
import Select from "react-select";
import { UserEmbed } from "../typings";
import Nav from "../components/navbar";
import Modal from "../components/modal";
import { useRouter } from "next/router";
import Button from "../components/button";
import { Toaster } from "react-hot-toast";
import Toggle from "../components/toggle";
import { useEffect, useState } from "react";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";
import InputGroup from "../components/inputgroup";

export default function Config() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [Embed, setEmbed] = useState(false);
  const [Faketoggled, setFake] = useState(false);
  const [invisToggled, setInvis] = useState(false);
  const [userEmbeds, setUserEmbeds] = useState(user?.embeds);
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

  function createEmbed(
    data?: Omit<UserEmbed, "id" | "userId">,
    currentIndex?: number
  ) {
    API.createEmbed(data)
      .then((data) => {
        setUser((user) =>
          Object.assign(user, { embeds: [...user.embeds, data.embed] })
        );
        setUserEmbeds((userEmbeds) => {
          if (currentIndex) {
            userEmbeds.splice(currentIndex, 0, data.embed);
            return userEmbeds;
          }

          return [...userEmbeds, data.embed];
        });

        sendToast(
          currentIndex ? "Successfully restored embed profile." : data.message,
          "success"
        );
      })
      .catch((err) => {
        sendToast(err.data.message, "error");
      });
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

        <div className="text-white">
          <div className="flex flex-col lg:flex-row md:flex-row md:space-x-4 space-y-2 md:space-y-0 lg:space-y-0 lg:space-x-4 p-10">
            <div className="bg-polar-200 rounded-md p-6 py-8">
              <h1 className="text-2xl">Downloads</h1>
              <div className="">
                <div className="mt-2 text-snow-100 mb-3 ">
                  Configs are created for screenshot uploaders such as the ones
                  listed below, it allows a user to quickly take images & videos
                  aswell as upload them through the use of a keybind.
                </div>
                <div className="flex flex-col md:flex-col space-x-0 lg:flex-row lg:space-x-2 md:space-x-0 lg:space-y-0 space-y-2 md:space-y-2">
                  <Button cname="w-full">ShareX</Button>
                  <Button cname="w-full">Magic Cap</Button>
                </div>
              </div>
            </div>
            <div className="bg-polar-200 rounded-md p-6 py-8 w-full">
              <h1 className="text-2xl">Domains</h1>
              <div className="lg:w-auto ">
                <div className="mt-2 text-snow-100">
                  Domains are perfect for customising your screenshots as they
                  allow you to set a custom domain for your screenshots.
                </div>
                <div className="mt-4 flex flex-wrap">
                  <InputGroup
                    textCname="rounded-l"
                    keepBorder={true}
                    text="https://"
                    show={true}
                    PlaceHolder="Subdomain"
                  />
                  <input
                    className="px-2 p-2 bg-polar-300 focus:outline-none w-32 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    placeholder="domain"
                  />
                  <InputGroup
                    text="/"
                    show={true}
                    PlaceHolder="FilePath"
                    inputCname="rounded-r"
                  />
                </div>
                <div className="text-snow-100 mt-2">
                  Your Selected domain is: Roblox.Kythi.pics/penis
                </div>

                <h1 className="mt-3 text-xl text-slate-200 font-medium">
                  Domain Options
                </h1>
                <div className="mt-1 text-snow-100">
                  You can toggle specific domain configurations on and off here.
                  Currently doesnt work.
                </div>
                <div className="flex flex-row space-x-3 mt-2">
                  <div className="space-x-1">
                    <Toggle
                      tooltip="Fake URL will allow you to use any URL or Text on the image but its obviously not the real domain, this is will most likely only work on discord."
                      label="Toggle Fake"
                      cname=""
                      checked={Faketoggled}
                      onChange={setFake}
                    />
                  </div>
                  <div className="space-x-1">
                    <Toggle
                      tooltip="Invisible URL will allow hide your filename on an image, this is will most likely only work on discord and will bug on other platforms."
                      label="Toggle Invis"
                      checked={invisToggled}
                      onChange={setInvis}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="mt-3 text-xl text-slate-200 font-medium">
                  Embed Editor
                </h1>
                <div className="mt-1 text-snow-100 mb-2">
                  The embed editor edits your embed. This should be clear enough
                  without any more context.
                </div>
                <Modal
                  text="There is many placeholders, to view them type : for
                  options"
                  title="Discord Editor"
                  buttonName="Edit Embed"
                >
                  <div className="mt-3 flex md:flex-row flex-col">
                    <div className="space-y-3 mr-0 md:mr-8 lg:mr-8">
                      <InputGroup
                        onChange={(ctx: any) => {
                          updateEmbed("siteUrl", ctx.target.value);
                        }}
                        value={
                          currentEmbed.siteUrl &&
                          currentEmbed.siteUrl.match(/https?:\/\//i)
                            ? currentEmbed.siteUrl.replace(/https?:\/\//i, "")
                            : currentEmbed.siteUrl ?? ""
                        }
                        text="https://"
                        show={true}
                        textCname="rounded-l"
                        PlaceHolder="Sitename URL"
                        inputCname="w-full rounded-r"
                      />
                      <InputGroup
                        PlaceHolder="SiteName"
                        value={currentEmbed.siteText ?? ""}
                        inputCname="w-full rounded"
                        onChange={(ctx: any) => {
                          updateEmbed("siteText", ctx.target.value);
                        }}
                      />
                      <InputGroup
                        show={true}
                        text="https://"
                        textCname="rounded-l"
                        PlaceHolder="Author URL"
                        inputCname="w-full rounded-r"
                        value={
                          currentEmbed.authorUrl &&
                          currentEmbed.authorUrl.match(/https?:\/\//i)
                            ? currentEmbed.authorUrl.replace(/https?:\/\//i, "")
                            : currentEmbed.authorUrl ?? ""
                        }
                        onChange={(ctx: any) => {
                          updateEmbed("authorUrl", ctx.target.value);
                        }}
                      />
                      <InputGroup
                        PlaceHolder="Author"
                        inputCname="w-full rounded"
                        value={currentEmbed.authorText ?? ""}
                        onChange={(ctx: any) => {
                          updateEmbed("authorText", ctx.target.value);
                        }}
                      />
                      <InputGroup
                        value={currentEmbed.title ?? ""}
                        onChange={(ctx: any) => {
                          updateEmbed("title", ctx.target.value);
                        }}
                        PlaceHolder="Title"
                        inputCname="rounded w-full"
                      />
                      <InputGroup
                        inputCname="w-full rounded"
                        PlaceHolder="Description"
                        value={currentEmbed.description ?? ""}
                        onChange={(ctx: any) => {
                          updateEmbed("description", ctx.target.value);
                        }}
                      />
                      <div className="">
                        <Button
                          cname="lg:w-96 w-full mt-3"
                          onClick={() => {
                            API.updateEmbedSettings(currentEmbed.id, {
                              enabled: currentEmbed.enabled,
                              color: currentEmbed.color,
                              siteText: currentEmbed.siteText,
                              siteUrl: currentEmbed.siteUrl,
                              authorText: currentEmbed.authorText,
                              authorUrl: currentEmbed.authorUrl,
                              title: currentEmbed.title,
                              description: currentEmbed.description,
                            })
                              .then((data) => {
                                const embeds = userEmbeds.map((embed) =>
                                  embed.id === currentEmbed.id
                                    ? currentEmbed
                                    : embed
                                );

                                setUser(Object.assign(user, { embeds }));
                                setUserEmbeds(embeds);
                                sendToast(data.message, "success");
                              })
                              .catch((err) => {
                                sendToast(err.data.message, "error");
                              });
                          }}
                          variant="success"
                        >
                          Save Changes
                        </Button>
                        <div className="mt-3 flex justify-center space-x-4">
                          <Button
                            onClick={() => {
                              API.deleteEmbed(currentEmbed.id)
                                .then((data) => {
                                  const { embed, message } = data;

                                  const currentIndex = userEmbeds.findIndex(
                                    (embed) => embed.id === currentEmbed.id
                                  );
                                  const embeds = userEmbeds.filter(
                                    (_, i) => i !== currentIndex
                                  );
                                  const newIndex =
                                    (embeds.length - 1) / 2 < currentIndex
                                      ? embeds.length - 1
                                      : 0;

                                  setUser(Object.assign(user, { embeds }));
                                  setUserEmbeds(embeds);
                                  setCurrentEmbed(embeds[newIndex]);

                                  sendToast(
                                    <>
                                      {message + " "}
                                      <button
                                        className="hover:underline text-white"
                                        onClick={() =>
                                          createEmbed(
                                            {
                                              enabled: embed.enabled,
                                              color: embed.color,
                                              siteText: embed.siteText,
                                              siteUrl: embed.siteUrl,
                                              authorText: embed.authorText,
                                              authorUrl: embed.authorUrl,
                                              title: embed.title,
                                              description: embed.description,
                                            },
                                            currentIndex
                                          )
                                        }
                                      >
                                        Restore Embed
                                      </button>
                                    </>,
                                    "success"
                                  );
                                })
                                .catch((err) => {
                                  sendToast(err.data.message, "error");
                                });
                            }}
                            cname="text-sm w-full"
                            variant="danger"
                          >
                            Delete Preset
                          </Button>
                          <Button
                            onClick={() => createEmbed()}
                            cname="text-sm w-full mb-3"
                            variant="success"
                          >
                            Create Preset
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="discord-embed shadow-md border-l-discord-light_blue border-l-4 rounded-sm bg-discord-base flex ml-auto">
                        <div className="embed pt-2 pr-4 pb-4 pl-3 font-discord-site">
                          <div className="embed-site mt-2 antialiased font-light text-site text-discord-site bg-discord-base font-whitney">
                            {currentEmbed.siteUrl ? (
                              <Link href={currentEmbed.siteUrl}>
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
                          <div className="embed-author mt-2 font-bold antialiased text-author font-whitney">
                            {currentEmbed.authorUrl ? (
                              <Link href={currentEmbed.authorUrl}>
                                <a className="hover:underline" target="_blank">
                                  {formatEmbedString(
                                    currentEmbed.authorText ?? ""
                                  )}
                                </a>
                              </Link>
                            ) : (
                              formatEmbedString(currentEmbed.authorText ?? "")
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
                      <div className="flex flex-col space-y-2 mt-3">
                        <div>
                          <Toggle
                            label="Toggle Embed"
                            cname="invisible"
                            checked={currentEmbed.enabled}
                            onChange={(val) => {
                              updateEmbed("enabled", val);
                            }}
                          />
                        </div>
                        <div>
                          <Toggle
                            label="Random Color"
                            cname="invisible"
                            checked={currentEmbed.color === "RANDOM"}
                            onChange={(val) => {
                              updateEmbed("color", val ? "RANDOM" : "#000000");
                            }}
                          />
                        </div>
                        <div
                          className={`space-x-2 select-none ${
                            currentEmbed.color === "RANDOM" && "hidden"
                          }`}
                        >
                          <span>Embed Color </span>
                          <input
                            name="color"
                            type="color"
                            className="bg-polar-200"
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
                  <div className="btn-group flex flex-wrap justify-center mt-4">
                    <Button
                      onClick={() => {
                        {
                          setCurrentEmbed((current) => {
                            const embedIndex = userEmbeds.findIndex(
                              (embed) => embed.id === current.id
                            );

                            return userEmbeds[
                              embedIndex !== 0 ? embedIndex - 1 : 0
                            ];
                          });
                        }
                      }}
                      cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200 mr-2"
                    >
                      {"<"}
                    </Button>
                    {userEmbeds.map((embed, index) => {
                      return (
                        <Button
                          variant="none"
                          key={index}
                          cname={`
                                btn normal-case ${
                                  currentEmbed.id === embed.id
                                    ? "bg-polar-400 hover:bg-polar-500"
                                    : "bg-polar-300 hover:bg-polar-400"
                                }  transition duration-200 rounded-lg mr-2
                              `}
                          onClick={() => {
                            setCurrentEmbed(embed);
                          }}
                        >
                          {index + 1}
                        </Button>
                      );
                    })}
                    <Button
                      cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200"
                      onClick={() => {
                        {
                          setCurrentEmbed((current) => {
                            const embedIndex = userEmbeds.findIndex(
                              (embed) => embed.id === current.id
                            );

                            return userEmbeds[
                              embedIndex + 1 !== userEmbeds.length
                                ? embedIndex + 1
                                : embedIndex
                            ];
                          });
                        }
                      }}
                    >
                      {">"}
                    </Button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
