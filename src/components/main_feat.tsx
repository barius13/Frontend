import { Globe, Shield, SwissKnife, FilingCabinet } from "../../public/svgs";

const MainFeat = () => {
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="flex flex-row-reverse flex-wrap items-center">
        <div className="md:w-6/12 lg:w-4/12 px-6 md:px-4 mr-auto ml-auto">
          <div className=" flex flex-col w-full shadow-2xl rounded-lg bg-polar-100">
            <img
              alt="discord embed"
              src="https://cdn.discordapp.com/attachments/853691527800029205/929751884351275018/Screenshot_2022-01-09_134825.png"
              className="w-full rounded-t-lg"
            />
            <div className="divide-y-2 divide-frost-200">
              <div />
              <div />
            </div>
            <blockquote className="p-10 mb-4">
              <h4 className="text-xl font-bold text-white">Express Yourself</h4>
              <p className="text-md font-normal mt-2 text-white">
                Share images with custom branding and personal expression. At
                Kythi we encourage users to express their identity online and
                have full customisation over everything, even as little as
                sharing images!
              </p>
            </blockquote>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <SwissKnife />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Personality</h6>
                  <p className="mb-4 text-blueGray-500">
                    You can edit your files & share them. You can also create
                    and personalise your experience.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <Shield />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Secure</h6>
                  <p className="mb-4 text-blueGray-500">
                    All passwords are hashed using argon2i, unbreakable and
                    secure for your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <FilingCabinet />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    Unlimited Storage
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                    We don&apos;t have a limit on how many files you produce,
                    upload as many as you want!
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <Globe />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Custom Domains</h6>
                  <p className="mb-4 text-blueGray-500">
                    Use any custom domain for your image sharing links
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainFeat;
