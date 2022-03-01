import Link from "next/link";
import { useUser } from "../components/user";
import ReCAPTCHA from "react-google-recaptcha";
import MainFeat from "../components/cards/main_feat";
import Footer from "../components/navigators/footer";
import Button from "../components/interactive/button";
import TestimonialBox from "../components/cards/testimonial";
import { Html, Clock, SwissKnife } from "../../public/svgs/paths";

export default function Index() {
  const { user } = useUser();

  return (
    <main className="font-medium bg-polar-300 text-gray-200">
      <div className="py-12 md:py-24 bg-polar-100 shadow-inner">
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0 ">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-2">
              Kythi
            </h1>
            <p className="text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-4">
              Upload files seamlessly with custom links & customisable embeds.
            </p>
            <div className="flex mb-5 md:space-x-3 mt-5 lg:flex-row md:flex-row flex-col">
              <Link href={user ? "/dashboard" : "/login"}>
                <a>
                  <Button variant="primary" size="xl" cname="mb-2 font-bold w-full">
                    {user ? "Dashboard" : "Login"}
                  </Button>
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <Button
                    variant="primary"
                    size="xl"
                    cname={`${user && "invisible"} w-full font-bold`}
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
        <div className="max-w-screen-xl px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="grid items-stretch content-center md:grid-cols-3 gap-3">
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/852693284429758504/4ccf2f28e7a6669c3172d13efa7a01be.webp?size=128"
            />
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/852693284429758504/4ccf2f28e7a6669c3172d13efa7a01be.webp?size=128"
            />
            <TestimonialBox
              user="Placeholder"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales mollis eleifend. Donec a consequat."
              avatar="https://cdn.discordapp.com/avatars/852693284429758504/4ccf2f28e7a6669c3172d13efa7a01be.webp?size=128"
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
