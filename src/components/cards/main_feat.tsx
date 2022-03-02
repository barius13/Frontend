import Link from "next/link";
import Image from "next/image";
import Embed_Image from "../../../public/images/embed.png";
import {
  GlobeAltIcon,
  CollectionIcon,
  ColorSwatchIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";

const MainFeat = () => {
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="flex flex-row-reverse flex-wrap items-center">
        <div className="md:w-6/12 lg:w-4/12 px-6 md:px-4 mr-auto ml-auto">
          <div className=" flex flex-col w-full shadow-lg rounded-lg bg-polar-100">
            <Image
              alt="discord embed"
              src={Embed_Image}
              className="w-full rounded-t-lg"
              placeholder="blur"
              height={360}
              width={450}
              quality={100}
            />

            <blockquote className="p-10 mb-4">
              <h4 className="text-xl font-bold text-white">Express Yourself</h4>
              <p className="text-md font-light mt-2 opacity-80">
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
                    <ColorSwatchIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h6 className="text-xl mb-1 font-bold">Custom Domains</h6>
                  <p className="mb-4 font-light opacity-80">
                    We have many domains to choose from. You can choose from a
                    variety of domains to host your images on.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <GlobeAltIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h6 className="text-xl mb-1 font-bold">Multiple Regions</h6>
                  <p className="mb-4 font-light opacity-80">
                    We make use of&nbsp;
                    <Link href="https://www.cloudflare.com/network/" passHref>
                      <span className="hover:underline opacity-60 font-medium cursor-pointer">
                        Cloudflare&apos;s Infrastructure
                      </span>
                    </Link>
                    &nbsp; to provide fast, secure and reliable hosting.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <ShieldExclamationIcon className="text-blue-500" />
                  </div>
                  <h6 className="text-xl mb-1 font-bold">Secure</h6>
                  <p className="mb-4 font-light opacity-80">
                    All passwords are hashed using&nbsp;
                    <Link href="https://en.wikipedia.org/wiki/Argon2" passHref>
                      <span className="hover:underline opacity-60 font-medium cursor-pointer">
                        argon2i
                      </span>
                    </Link>
                    , a modern, memory-hard, CPU-hard, and parallelizable
                    hashing algorithm.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-polar-100">
                    <CollectionIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h6 className="text-xl mb-1 font-bold">Unlimited Storage</h6>
                  <p className="mb-4 font-light  opacity-70">
                    We dont limit your freedom. You can upload as many images as
                    you want.
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
