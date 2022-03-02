import API from "../api";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "../components/user";
import { userTestimonial } from "../typings";
import ReCAPTCHA from "react-google-recaptcha";
import MainFeat from "../components/cards/main_feat";
import Footer from "../components/navigators/footer";
import Button from "../components/interactive/button";
import TestimonialBox from "../components/cards/testimonial";

export default function Index() {
  const { user } = useUser();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    API.getTestimonials().then((data) => setTestimonials(data.testimonials));
  }, []);

  return testimonials.length ? (
    <main className="font-medium bg-polar-300 text-gray-200">
      <div className=" md:pt-24 bg-polar-100">
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
                    Login
                  </Button>
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <Button
                    variant="primary"
                    size="xl"
                    cname="w-full font-bold"
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
      <svg className="bg-polar-200 shadow-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 160">
        <path fill="#141517" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className="bg-polar-200">
        <MainFeat />
        <div className="max-w-screen-xl px-6 pb-12 mt-20 md:mt-30 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">

          
          <div className="grid items-stretch content-center md:grid-cols-3 gap-3">
            {testimonials?.map((testimonial: userTestimonial, i) => (
              <TestimonialBox
              key={i}
              user={testimonial.author.username}
              content={testimonial.text}
              avatar={testimonial.author.avatarURL}
            />
            ))}
          </div>
        </div>
        
      </div>

      <ReCAPTCHA
        sitekey={process.env.ReCAPTCHA_KEY!}
        size="invisible"
        theme="dark"
      />
      <Footer />
    </main>
  ) : null;
}
