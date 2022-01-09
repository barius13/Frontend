import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import { useUser } from "../components/user";
import FeatureBox from "../components/feature";
import TestimonialBox from "../components/testimonial";
import MainFeat from "../components/main_feat";



export default function Index() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <main className="font-medium bg-polar-300 text-gray-200">
      <div className="py-12 md:py-24 bg-polar-100 shadow-inner">
        
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
            <h1 className=" text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-2">
              Kythi.
            </h1>
            <p className="text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-10">
              Upload files seamlessly with custom links & customisable embeds.
            </p>
            <div className="flex mb-6 space-x-4 mt-5">
              <Link href={user ? "/dashboard" : "/login"} passHref>
                <button
                  className={`inline-block w-${
                    user ? 50 : 40
                  } px-5 py-2 font-semibold text-white rounded-md bg-frost-400 hover:bg-frost-300 shadow-lg`}
                >
                  {user ? "Go To Dashboard" : "Login"}
                </button>
              </Link>
              <Link href="/register" passHref>
                <button
                  className={`inline-block px-5 py-2 w-40 font-semibold text-white rounded-md bg-aurora-red-200 hover:bg-aurora-red-100 shadow-lg ${
                    user ? "invisible" : ""
                  }`}
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              100% Free, invitation code required upon signing up.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-polar-300 pt-20 shadow-inner">
        <MainFeat />
        <div className="max-w-screen-xl px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
              Features
            </h2>
          </div>

          <div className="grid items-stretch md:grid-cols-1 gap-3">
            <FeatureBox
              title="Personalization."
              content="Kythi allows you to personalise your files with your own customised embeds, domains and many more features to choose from to allow you to truly customise."
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              }
              isSvg={true}
            />

            <FeatureBox
              title="Secure."
              content="All passwords are hashed using argon2i. This prevents any users or attackers from accessing your account without your permission keeping you & your data safe."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#EBCB8B"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
              }
            />

            <FeatureBox
              title="Various File-Types"
              content="Kythi supports multiple file types, for example we allow .mp4, .mp3,
              .png, .jpg and more. This allows you to express your creativity!"
              isSvg={true}
              svgData={{ stroke: "#EBCB8B" }}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              }
            />
            <FeatureBox
              title="Open Source"
              content={
                <p className="mb-6 text-lg text-gray-200">
                  You can view our code on{" "}
                  <Link href="https://github.com/KythiX">
                    <a
                      className="text-frost-300 hover:underline"
                      target="_blank"
                    >
                      GitHub!
                    </a>
                  </Link>{" "}
                  This gives you access to host this yourself as well as
                  ensuring you know what happens with your data & how its
                  handled.
                </p>
              }
              isSvg={true}
              svgData={{ stroke: "#BF616A" }}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              }
            />

          </div>
        </div>
      </div>
      <div className="bg-polar-300">
        <div className="max-w-screen-xl px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="text-center md:mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
              Testimonials
            </h2>
          </div>
          <div className="grid items-stretch content-center md:grid-cols-3 gap-3">
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/659876122183335966/27e73488ca8820bc80ec53f34d0c6ada.webp?size=128"
            />
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/731728644837343275/a_961a1e136addd8b4fc2bb0c24e413aca.webp?size=128"
            />
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/287628873309618176/b62a52f3637028a13b665fee6f9de2bc.webp?size=128"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
