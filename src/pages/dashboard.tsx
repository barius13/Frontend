import API from "../api";
import React from "react";
import Link from "next/link";
import Nav from "../components/navbar";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { useUser } from "../components/user";
import StatsBox from "../components/userstats";
import { sendToast } from "../utils/sendToast";
import { Server, BarChart, CloudArrow } from "../../public/svgs";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const [Delete, setDelete] = React.useState(false); // Delete Modal
  const [showModal, setShowModal] = React.useState(false);
  const [showSuggestion, setSuggestion] = React.useState(false);
  const [showTestimonial, setTestimonial] = React.useState(false); // Testimonial modal
  const [testimony, setTestimony] = useState<string | null>(null);
  const [testimonialClicked, setTestimonialClicked] = useState(false);
  const [testimonialDeleteClicked, setTestimonialDeleteClicked] =
    useState(false);

  const [stats, setStats] = React.useState({
    userPing: undefined,
  });

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (!user.discordId) {
      router.push("/discord");
    } else {
      API.getPing().then((ping) => {
        setStats({ ...stats, userPing: ping });
      });

      API.getUserTestimony()
        .then((data) => {
          setTestimony(data.testimony.content);
        })
        .catch(() => null);
    }
  }, [document, router, user]);

  return (
    user &&
    user.discordId && (
      <>
        <Toaster />
        <Nav page={"dash"} />

        <main className="px-4">
          <div className="flex flex-col items-center justify-center p-10">
            <div className="mr-auto">
              <div className="text-3xl font-semibold text-white">
                Welcome, {user.username}
              </div>
              <div className="text-xl text-snow-300 lg:mb-8 mb-4">
                Member since Dec 3, 2021
              </div>
            </div>
            <div className="flex lg:flex-row flex-nowrap lg:space-x-4 lg:space-y-0 space-y-10 md:flex-col flex-col">
              <div className="text-white flex space-y-4 flex-nowrap w-full flex-col">
                <div className="flex w-full items-stretch lg:flex-row md:flex-col flex-col lg:space-y-0 space-y-3 lg:space-x-4">
                  <div className="w-full">
                    <StatsBox
                      title="Uploads"
                      content={user.upload.count.toString()}
                      icon={<CloudArrow />}
                    />
                  </div>

                  <div className="w-full">
                    <StatsBox
                      title="Storage"
                      content="350mb"
                      icon={<Server />}
                    />
                  </div>
                  <div className="w-full">
                    <StatsBox
                      title="Latency"
                      content={`${stats.userPing}ms`}
                      icon={<BarChart />}
                    />
                  </div>
                </div>
                <div className="flex lg:space-y-0 lg:space-x-4 md:space-x-0 space-x-0 md:space-y-10 space-y-10 lg:flex-row w-full md:flex-col flex-col">
                  <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg w-full">
                    <div className="flex items-baseline justify-between ">
                      <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                        Recently uploaded File.
                      </h4>
                    </div>
                    <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                      <div />
                      <div />
                    </div>
                    <div className="w-full mt-3 hover:shadow-xl duration-700">
                      <img
                        src="https://nyc3.digitaloceanspaces.com/kythi.pics/dfa6659b-46f9-5521-9452-6e08f897e59e/6bIAOKVh0b.png"
                        alt="Recently Uploaded Image"
                      />
                      <div className="divide-y-2 divide-aurora-red-300">
                        <div />
                        <div />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 bg-polar-400 rounded-md px-4 border-l-frost-300 border-l-2 py-4 ">
                      <div className="flex items-center">
                        <img
                          src={user.discord?.avatar as string}
                          className="w-8 h-8 rounded-full mr-2"
                          alt="User Avatar"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-snow-300">
                            You, {user.username}
                          </span>
                          <span className="text-xs font-medium text-snow-100">
                            2 hours ago
                          </span>
                        </div>
                      </div>
                      <Button
                        size="lg"
                        variant="danger"
                        onClick={() => {
                          setDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg w-full">
                    <div className="flex items-baseline justify-between ">
                      <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                        Updates, News, and Announcements.
                      </h4>
                    </div>
                    <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                      <div />
                      <div />
                    </div>
                    <p className="bg-polar-400 py-2 px-2 rounded-md border-l-frost-300 border-l-2 mt-8 text-snow-200">
                      Welcome to kythi we thank you for taking an interest in
                      our service! We are currently in beta and we are working
                      on a lot of features and bug fixes. We will be adding more
                      features and bug fixes in the future. We hope you enjoy
                      your stay!
                    </p>
                    <div className="flex items-center justify-between mt-2 bg-polar-400 rounded-md px-2 border-l-frost-300 border-l-2">
                      <div className="flex items-center mb-4 mt-3">
                        <img
                          className="w-10 h-10 rounded-full mr-2"
                          alt="User Avatar"
                          src={user.discord?.avatar}
                        />
                        <div className="flex flex-col">
                          <span className="font-medium text-snow-300">
                            {user.username} - Admin
                          </span>
                          <span className="text-sm font-medium text-snow-100">
                            2 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                    Quick Links
                  </h4>
                </div>
                <div className="divide-y-2 divide-frost-300 mb-2 mt-3">
                  <div />
                  <div />
                </div>
                <Link href="/config" passHref>
                  <Button variant="danger" cname="w-full mt-6">
                    Embed Customizations
                  </Button>
                </Link>
                <Link href="/config" passHref>
                  <Button cname="w-full mt-4">Config Downloads</Button>
                </Link>
                <Button
                  cname="w-full mt-4"
                  onClick={() => setTestimonial(true)}
                >
                  Submit a Testimonal
                </Button>
                <Button cname="w-full mt-4" onClick={() => setSuggestion(true)}>
                  Suggest a Feature
                </Button>
                <Button cname="w-full mt-4" onClick={() => setShowModal(true)}>
                  Report a bug
                </Button>
              </div>
            </div>
          </div>
        </main>

        {Delete && (
          <>
            <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="mx-auto lg:w-1/3 p-4">
                <div className="rounded-lg bg-polar-200 p-4">
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <h1 className="font-semibold text-xl mb-2 text-white">
                        Delete File
                      </h1>
                      <Button
                        onClick={() => setDelete(false)}
                        cname="bg-polar-300 hover:bg-polar-400 -mt-1"
                      >
                        X
                      </Button>
                    </div>
                    <span className="text-snow-200">
                      Are you sure you want to delete this File? This action is
                      not reversible. This will permanently delete the File from
                      our servers. This action is irreversible!
                    </span>
                  </div>
                  <div className="flex p-4">
                    <Button
                      onClick={() => {
                        setDelete(false);
                        sendToast("Successfully deleted File!", "success");
                      }}
                      variant="danger"
                      cname="w-full -mt-2"
                    >
                      Delete File
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-30 fixed inset-0 bg-black" />
          </>
        )}

        {showTestimonial && (
          <>
            <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="mx-auto lg:w-1/3 p-4">
                <div className="rounded-lg bg-polar-200 p-8">
                  <div>
                    <div className="flex flex-row justify-between">
                      <h1 className="text-3xl font-bold text-snow-300">
                        Testimonial Submission
                      </h1>
                      <Button
                        onClick={() => setTestimonial(false)}
                        cname="bg-polar-300 hover:bg-polar-400 -mt-1"
                      >
                        X
                      </Button>
                    </div>
                    <h2 className="mt-3 font-semibold text-snow-100">
                      Thank you for using our service! Input your testimonial
                      here and it will be sent for approval!
                    </h2>
                    <textarea
                      id="testimonyInput"
                      placeholder="Testimonial Description"
                      value=""
                      className="bg-polar-300 mt-3 h-32 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    />
                    <Button
                      onClick={() => {
                        setTestimonial(false);
                        sendToast("Testimonial submitted!", "success");
                      }}
                      cname="bg-polar-300 hover:bg-polar-400 w-full mt-2 h-11"
                    >
                      Submit Testimonial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-30 fixed inset-0 bg-black" />
          </>
        )}

        {showSuggestion && (
          <>
            <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="mx-auto lg:w-1/3 p-4">
                <div className="rounded-lg bg-polar-200 p-8">
                  <div>
                    <div className="flex flex-row justify-between">
                      <h1 className="text-3xl font-bold text-snow-300">
                        Suggestion Form
                      </h1>
                      <Button
                        onClick={() => setSuggestion(false)}
                        cname="bg-polar-300 hover:bg-polar-400 -mt-1"
                      >
                        X
                      </Button>
                    </div>
                    <h2 className="mt-3 font-semibold text-snow-100">
                      Thank you for using our service! We are delighted that you
                      have a suggestion to make! Please fill out the form below
                      and we will get back to you as soon as possible!
                    </h2>
                    <textarea
                      value=""
                      placeholder="Suggestion Description"
                      className="bg-polar-300 mt-3 h-32 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                    />
                    <Button
                      onClick={() => {
                        setSuggestion(false);
                        sendToast("Successfully Sent Suggestion!", "success");
                      }}
                      cname="bg-polar-300 hover:bg-polar-400 w-full mt-2 h-11"
                    >
                      Submit Suggestion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-30 fixed inset-0 bg-black" />
          </>
        )}

        {showModal && (
          <>
            <div className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="mx-auto lg:w-1/3 p-4">
                <div className="rounded-lg bg-polar-200 p-4">
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h3 className="text-3xl font-semibold text-white">
                        Bug Report
                      </h3>
                      <Button
                        onClick={() => setShowModal(false)}
                        cname="bg-polar-300 hover:bg-polar-400 -mt-1"
                      >
                        X
                      </Button>
                    </div>
                    <h2 className="mt-3 font-semibold text-snow-100">
                      We're sorry you had a bad experience please list exactly
                      what occured so we can fix it as soon as possible!
                    </h2>
                    <textarea
                      value=""
                      placeholder="Bug Description"
                      className="bg-polar-300 caret-white mt-6 h-10 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400 "
                    />
                    <select className="select border-0 font-medium text-sm w-full bg-polar-300 rounded mt-3 h-10 px-2 outline-none appearance-none text-white">
                      <option disabled={false} selected={true}>
                        How Severe is this bug?
                      </option>
                      <option>Minor</option>
                      <option>Moderate</option>
                      <option>Major</option>
                    </select>
                    <div className="mt-3 font-semibold text-snow-100">
                      Before Submitting please check if there is any
                      announcement of the error being fixed. Thanks!
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-4">
                    <Button
                      onClick={() => {
                        setShowModal(false);
                        sendToast("Successfully Sent Bug Report.", "success");
                      }}
                      cname="bg-polar-300 hover:bg-polar-400 w-full h-11 -mt-4"
                    >
                      Submit Suggestion
                    </Button>
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
