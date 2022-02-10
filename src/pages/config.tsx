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
  const [userEmbeds, setUserEmbeds] = useState(user?.embeds);
  const [Faketoggled, setFake] = useState(false);
  const [invisToggled, setInvis] = useState(false);
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
              <div className="lg:w-96">
                <div className="mt-2 text-snow-100 mb-3">
                  Configs are created for screenshot uploaders such as the ones
                  listed below, it allows a user to quickly take images & videos
                  aswell as upload them through the use of a keybind.
                </div>
                <div className="flex flex-col md:flex-col space-x-0 lg:flex-row lg:space-x-2 md:space-x-0 lg:space-y-0 space-y-2 md:space-y-2">
                  <Button size="xl">ShareX</Button>
                  <Button size="xl">Magic Cap</Button>
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
                <div className="mt-4 rounded-md shadow-sm flex flex-wrap">
                  <InputGroup
                    textOptions={{ roundedLeft: true }}
                    keepBorder={true}
                    text="https://"
                    PlaceHolder="Subdomain"
                  />
                  <input
                    className="px-2 p-2 bg-polar-300 focus:outline-none w-32 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    placeholder="domain"
                  />
                  <InputGroup
                    inputOptions={{ roundedRight: true }}
                    text="/"
                    PlaceHolder="FilePath"
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
                <div className="mt-1 text-snow-100">
                  The embed editor edits your embed. This should be clear enough
                  without any more context.
                </div>
                <Button
                  cname="mt-2"
                  onClick={() => {
                    setEmbed(true);
                  }}
                >
                  Edit your Embed
                </Button>
              </div>
            </div>
          </div>
        </div>

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
