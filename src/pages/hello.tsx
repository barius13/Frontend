import Link from "next/link";
import Footer from "../components/footer";
import { useUser } from "../components/user";
import FeatureBox from "../components/feature";
import MainFeat from "../components/main_feat";
import TestimonialBox from "../components/testimonial";

export default function Index() {
  const { user } = useUser();

  return (
<main className="font-medium bg-polar-300 text-gray-200">
      <div className="py-12 md:py-24 bg-polar-100 shadow-inner">
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
            <h1 className=" text-3xl font-bold text-red md:text-4xl lg:text-5xl md:mb-4 lg:mb-2">
              Honestly I want to eat pizza.
            </h1>
          </div>
        </div>
  </div>
 
               <div className="bg-polar-300 pt-20 shadow-inner">
        <MainFeat />
        <div className="max-w-screen-lg px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
              Types of pizza
            </h2>
          </div>
          <div className="grid items-stretch md:grid-cols-1 gap-3">
            <FeatureBox
              title="Sausage Pizza"
              content="We allow you to eat the best sausage pizza in the country,now only at KythiX!"
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
              title="Pineapple Pizza"
              content={
                <p className="mb-6 text-lg text-gray-200">
                We serve fresh pineapple pizza,it's awesome.You should try it!
                </p>
              }
              isSvg={true}
              svgData={{ stroke: "#BF616A" }}
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
          
          <div className="bg-polar-300">
        <div className="max-w-screen-xl px-6 pb-12 md:mt-20 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
          <div className="text-center md:mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
              Our reviews.
            </h2>
          </div>
          <div className="grid items-stretch content-center md:grid-cols-3 gap-3">
            <TestimonialBox
              user="barius"
              content="ngl bro this is the best pizza I ever had"
              avatar="https://cdn.discordapp.com/avatars/803268023267098634/f495f4d7d340d21b439148bc7182a30b.webp?size=128"
            />
             </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
