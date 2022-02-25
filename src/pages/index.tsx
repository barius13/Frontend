import Link from "next/link";
import { useUser } from "../components/user";
import ReCAPTCHA from "react-google-recaptcha";
import MainFeat from "../components/cards/main_feat";
import Footer from "../components/navigators/footer";
import Button from "../components/interactive/button";
import FeatureBox from "../components/interactive/feature";
import TestimonialBox from "../components/cards/testimonial";
import { Html, Clock, SwissKnife } from "../../public/svgs/paths";

export default function Index() {
  const { user } = useUser();

  return (
    <main className="font-medium bg-polar-300 text-gray-200">
      <div className="py-12 md:py-24 bg-polar-100 shadow-inner">
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-2">
              Kythi.
            </h1>
            <p className="text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-4">
              Upload files seamlessly with custom links & customisable embeds.
            </p>
            <div className="flex mb-5 md:space-x-3 mt-5 lg:flex-row md:flex-row flex-col">
              <Link href={user ? "/dashboard" : "/login"}>
                <a>
                  <Button variant="primary" size="xl" cname="mb-2 w-full">
                    {user ? "Dashboard" : "Login"}
                  </Button>
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <Button
                    variant="primary"
                    size="xl"
                    cname={`${user && "invisible"} w-full`}
                  >
                    Register
                  </Button>
                </a>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              100% Free, invitation code required upon signing up.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-polar-200 pt-20 shadow-inner">
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
              icon={<SwissKnife />}
              isSvg={true}
            />

            <FeatureBox
              title="Fast Speeds."
              content={
                <p className="mb-6 text-lg text-gray-200">
                  We have servers around America ensuring our upload speeds are
                  as fast as possible, and your files will be uploaded in
                  seconds.
                </p>
              }
              isSvg={true}
              svgData={{ stroke: "#BF616A" }}
              icon={<Clock />}
            />
            <FeatureBox
              title="Open Source."
              content={
                <p className="mb-6 text-lg text-gray-200">
                  You can view our code on&nbsp;
                  <Link href="https://github.com/KythiX" passHref>
                    <a
                      className="text-frost-300 hover:underline"
                      target="_blank"
                    >
                      GitHub!
                    </a>
                  </Link>
                  &nbsp; This gives you access to host this yourself as well as
                  ensuring you know what happens with your data & how its
                  handled.
                </p>
              }
              isSvg={true}
              svgData={{ stroke: "#BF616A" }}
              icon={<Html />}
            />
          </div>
        </div>
      </div>
      <div className="bg-polar-300">
        <div className="max-w-screen-xl px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="text-center md:mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 mt-8">
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
      {/* quite literally only here for the badge */}
      <ReCAPTCHA
        sitekey="6Lf5RnseAAAAABmOZgW-GfybGm3exHBtNStx_ioa"
        size="invisible"
        theme="dark"
      />
      <Footer />
    </main>
  );
}
