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
        <div className="max-w-screen-lg px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
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
              title="Fast Speeds."
              content={
                <p className="mb-6 text-lg text-gray-200">
                  We have servers around America ensuring our upload speeds are as fast as possible, and your files will be uploaded in seconds.
                </p>
              }
              isSvg={true}
              svgData={{ stroke: "#BF616A" }}
              icon={
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />

              }
            />
            <FeatureBox
              title="Open Source."
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
