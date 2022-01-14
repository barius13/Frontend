import { useEffect } from "react";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { useUser } from "../components/user";
import { sendToast } from "../utils/sendToast";

export default function Config() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />

      <Nav page="config" />

      <div className="flex justify-center text-white p-4 lg:flex-row md:flex-row flex-col bg-polar-100">
        <div className="bg-polar-200 mt-10 p-6 rounded lg:mr-6 md:mr-6 lg:w-3/12 shadow-lg">
          <h1 className="text-2xl text-snow-300">Config Downloads</h1>
          <div className="divide-y-2 divide-white mt-3">
            <div />
            <div />
          </div>
          <div className="mt-2 text-snow-100">
            Configs are for screenshot uploaders such as the ones listed below,
            it allows a user to quickly take images & videos aswell as upload
            them through the use of a keybind.
          </div>
          <button className="btn w-full border-0 btn-sm h-10 mt-6 normal-case bg-frost-400 hover:bg-frost-300 duration-300 ">
            Sharex (Windows)
          </button>
          <button className="btn w-full border-0 btn-sm h-10 mt-3 normal-case bg-amber-500 hover:bg-amber-400 duration-300">
            Linux/MacOS
          </button>
          <button className="btn w-full border-0 btn-sm h-10 mt-3 normal-case bg-green-500 hover:bg-green-600 duration-300">
            Android
          </button>
          <button className="btn w-full border-0 btn-sm h-10 mt-3 normal-case bg-aurora-red-300 hover:bg-aurora-red-400">
            iOS
          </button>
        </div>
        <div>
          <div className="discord-embed shadow-md border-l-discord-light_blue border-l-4 rounded-sm bg-discord-base mt-10 mb-3">
            <div className="embed pt-2 pr-4 pb-4 pl-3 font-discord-site">
              <div className="embed-site mt-2 antialiased font-light text-site text-discord-site bg-discord-base font-whitney">
                Site
              </div>
              <div className="embed-author mt-2 font-bold antialiased text-author font-whitney">
                Author
              </div>
              <div className="embed-title mt-2 font-semibold subpixel-antialiased text-title font-whitney">
                <a className="text-discord-blue cursor-pointer hover:underline">
                  Brooklyn
                </a>
              </div>
              <div className="embed-desc mt-2 font-normal subpixel-antialiased text-desc text-gray-300 max-w-sm font-whitney">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                fugiat.
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
          <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col rounded-md lg:space-x-2 md:space-x-2">
            <label
              htmlFor="Embed-Editor"
              className="bg-frost-300 hover:bg-frost-400 duration-300 btn normal-case lg:w-36 md:w-36 w-full mt-2 border-0"
            >
              Edit Config
            </label>
            <label
              onClick={() => {
                sendToast("Successfully deleted preset!", "success");
              }}
              className="bg-aurora-red-300 hover:bg-aurora-red-400 duration-300 normal-case btn lg:w-36 md:w-36 w-full mt-2 border-0"
            >
              Delete Preset
            </label>
            <label
              onClick={() => {
                sendToast("Successfully created preset!", "success");
              }}
              className="bg-[#239d56] hover:bg-[#1f8b4d] duration-300 btn normal-case lg:w-36 md:w-36 w-full mt-2 border-0"
            >
              Create Preset
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="Embed-Editor" className="modal-toggle" />
      <div className="modal p-2 duration-200">
        <div className="modal-box rounded-md bg-polar-100 p-6">
          <h1 className="font-semibold text-2xl mb-4">Embed Editor</h1>
          <div className="divide-y-2 divide-white">
            <div />
            <div />
          </div>
          <div>
            <div className="flex flex-col mb-4 mt-2">
              <span className="text-snow-100">
                There is many placeholders, to view them type % for options
              </span>
              <label className="cursor-pointer label mr-auto">
                <span>Embed Color</span>
                <input
                  type="color"
                  value=""
                  className="bg-polar-100 mr-auto ml-2"
                />
              </label>

              <input
                placeholder="SiteName"
                className="bg-polar-300 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
              />
              <label className="input-group mt-3">
                <span className="bg-gray-700 border-r-2 border-gray-300">
                  https://
                </span>
                <input
                  placeholder="SiteName Url"
                  className="bg-polar-300 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                />
              </label>

              <input
                placeholder="Author"
                className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
              />

              <label className="input-group mt-3">
                <span className="bg-gray-700 border-r-2 border-gray-300">
                  https://
                </span>
                <input
                  placeholder="Author Url"
                  className="bg-polar-300 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                />
              </label>
              <input
                placeholder="Title"
                className="bg-polar-300 mt-3 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
              />
              <textarea
                placeholder="Description"
                className="bg-polar-300 mt-3 h-10 rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
              />
            </div>
            <div className="btn-group flex justify-center">
              <button className="btn normal-case">-</button>
              <button className="btn bg-frost-400 hover:bg-frost-300">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
              <button className="btn">5</button>
              <button className="btn normal-case"> - </button>
            </div>
          </div>
          <div className="modal-action space-x-2 flex flex-col">
            <label className="cursor-pointer label mr-auto">
              <span>Toggle Embed</span>
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-accent ml-4"
              />
            </label>
            <label
              onClick={() => {
                sendToast("Successfully Saved Embed!", "success");
              }}
              className="bg-[#239d56] btn hover:bg-[#1f8b4d] capitalize cursor-pointer text-center text-white font-medium mt-4 border-0"
            >
              Save Embed
            </label>
            <label
              htmlFor="Embed-Editor"
              className="bg-polar-300 btn hover:bg-polar-200 capitalize cursor-pointer text-center text-white font-medium mt-3 border-0"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
