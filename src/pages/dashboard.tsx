import API from "../api";
import React from "react";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { months } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useUser } from "../components/user";
import { formatBytes } from "../utils/Format";
import { sendToast } from "../utils/sendToast";
import Nav from "../components/navigators/navbar";
import Modal from "../components/interactive/modal";
import StatsBox from "../components/cards/userstats";
import Button from "../components/interactive/button";
import {
  ChartSquareBarIcon,
  ServerIcon,
  CloudUploadIcon,
} from "@heroicons/react/outline";

export default function Dashboard() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [recentlyUploaded, setRecentlyUploaded] = useState(
    `https://s3.us-east-2.wasabisys.com/kythi/${user.id}/${user.uploads[0]?.cdnName}` ??
      "https://s3.us-east-2.wasabisys.com/kythi/sys/File_Not_Found_1.png"
  );
  const [testimonialContent, setTestimonialContent] = useState(
    user?.testimonial?.content
  );
  const [stats, setStats] = useState({
    userPing: undefined,
  });

  function getDate(date: string | number | Date) {
    const jsDate = new Date(date);

    return {
      month: months[(jsDate.getMonth() + 1) as keyof object],
      day: jsDate.getDate(),
      year: jsDate.getFullYear(),
    };
  }
  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (!user.discordId) {
      router.push("/discord");
    } else {
      API.getPing().then((ping) => {
        setStats({ ...stats, userPing: ping });
      });
    }
  }, [document, router, user]);

  return (
    user &&
    user.discordId && (
      <>
        <Toaster />
        <Nav page={"dash"} />

        <div className="flex flex-col items-center justify-center p-10 h-max bg-polar-100">
          <div className="mr-auto">
            <div className="text-3xl font-semibold text-white">
              Welcome, {user.username}
            </div>
            <div className="text-xl text-snow-300 lg:mb-8 mb-4">
              Member since {getDate(user.createdAt).month}&nbsp;
              {getDate(user.createdAt).day} {getDate(user.createdAt).year}
            </div>
          </div>
          <div className="flex lg:flex-row flex-nowrap lg:space-x-4 lg:space-y-0 space-y-10 md:flex-col flex-col">
            <div className="text-white flex space-y-4 flex-nowrap w-full flex-col">
              <div className="flex w-full items-stretch lg:flex-row md:flex-col flex-col lg:space-y-0 space-y-3 lg:space-x-4">
                <div className="w-full">
                  <StatsBox
                    title="Uploads"
                    content={user.upload.count.toString()}
                    icon={
                      <CloudUploadIcon className="h-6 w-6 text-aurora-yellow" />
                    }
                  />
                </div>

                <div className="w-full">
                  <StatsBox
                    title="Storage"
                    content={`${formatBytes(user.uploads.reduce((a, b) => a + b.size, 0))}`}
                    icon={
                      <ServerIcon className="h-6 w-6 text-aurora-red-300" />
                    }
                  />
                </div>
                <div className="w-full">
                  <StatsBox
                    title="Latency"
                    content={`${stats.userPing}ms`}
                    icon={
                      <ChartSquareBarIcon className="h-6 w-6 text-aurora-pink" />
                    }
                  />
                </div>
              </div>
              <div className="flex lg:space-y-0 lg:space-x-4 md:space-x-0 space-x-0 md:space-y-10 space-y-10 lg:flex-row w-full md:flex-col flex-col">
                <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg w-full">
                  <div className="flex items-baseline justify-between ">
                    <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                      Latest Upload
                    </h4>
                  </div>
                  <div className="divide-y-2 divide-white mb-2 mt-3">
                    <div />
                    <div />
                  </div>
                  <div className="mt-3 duration-700 cursor-pointer">
                    {recentlyUploaded.endsWith("mp4") ||
                    recentlyUploaded.endsWith("mov") ||
                    recentlyUploaded.endsWith("webm") ? (
                      <video
                        src={recentlyUploaded}
                        className="rounded-lg w-full h-60 object-cover"
                        controls
                      />
                    ) : (
                      <img
                        src={recentlyUploaded}
                        alt="Recently Uploaded Image"
                        className="rounded-lg w-full h-60 object-cover hover:shadow-xl hover:-translate-y-1"
                        onClick={() => {
                          window.open(recentlyUploaded, "_blank");
                        }}
                      />
                    )}
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
                    <Modal
                      buttonName="Delete"
                      cname="bg-polar-400 danger"
                      text="Are you sure you want to delete this File? This action
                          is not reversible. This will permanently delete the
                          File from our servers. This action is irreversible!"
                      title="Delete File"
                    >
                      <div className="mt-6">
                        <Button
                          onClick={() => {
                            sendToast("Successfully deleted File!", "success");
                          }}
                          variant="danger"
                          cname="w-full -mt-2"
                        >
                          Delete File
                        </Button>
                      </div>
                    </Modal>
                  </div>
                </div>

                <div className="p-6 bg-polar-200 rounded-md md:p-6 shadow-lg w-full">
                  <div className="flex items-baseline justify-between ">
                    <h4 className="text-xl font-bold lg:text-2xl text-snow-100 mt-1">
                      Updates, News, and Announcements.
                    </h4>
                  </div>
                  <div className="divide-y-2 divide-white mb-2 mt-3">
                    <div />
                    <div />
                  </div>
                  <p className="bg-polar-400 py-2 px-2 rounded-md border-l-white border-l-2 mt-8 text-snow-200">
                    Welcome to kythi we thank you for taking an interest in our
                    service! We are currently in beta and we are working on a
                    lot of features and bug fixes. We will be adding more
                    features and bug fixes in the future. We hope you enjoy your
                    stay!
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
                <h4 className="text-xl font-medium lg:text-2xl text-snow-100 mt-1">
                  Quick Links
                </h4>
              </div>
              <div className="divide-y-2 divide-white mb-2 mt-3">
                <div />
                <div />
              </div>
              <Modal
                w="lg:w-1/3"
                cname="w-full mt-4"
                buttonName="Suggest a Feature"
                title="Suggestion"
                text="Thank you for using our service! We are delighted that you have a suggestion to make! Please fill out the form below and we will get back to you as soon as possible!"
              >
                &nbsp;
                <div>
                  <textarea
                    value=""
                    placeholder="Suggestion Description"
                    className="bg-polar-300 mt-3 h-32 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                  />
                  <Button
                    onClick={() => {
                      sendToast("Successfully Sent Suggestion!", "success");
                    }}
                    cname="bg-polar-300 hover:bg-polar-400 w-full mt-2 h-11"
                  >
                    Submit Suggestion
                  </Button>
                </div>
              </Modal>

              <Modal
                w="lg:w-1/3"
                text="We're sorry you had a bad experience please list exactly what
                occured so we can fix it as soon as possible!"
                title="Bug Report"
                buttonName="Bug Report"
                cname="w-full mt-4"
              >
                <div>
                  <textarea
                    placeholder="Bug Description"
                    className="bg-polar-300 caret-white mt-6 h-10 w-full rounded-md p-2 hover:bg-polar-400 focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400 "
                  />
                  <select className=" rounded border-0 font-medium text-sm w-full bg-polar-300  mt-3 h-10 px-2 outline-none appearance-none text-white">
                    <option disabled={false} selected={true}>
                      How Severe is this bug?
                    </option>
                    <option>Minor</option>
                    <option>Moderate</option>
                    <option>Major</option>
                  </select>
                  <div className="mt-3 font-semibold text-snow-100">
                    Before Submitting please check if there is any announcement
                    of the error being fixed. Thanks!
                  </div>
                  <Button
                    onClick={() => {
                      sendToast("Successfully Sent Bug Report.", "success");
                    }}
                    cname="bg-polar-300 hover:bg-polar-400 w-full h-11 mt-3"
                  >
                    Submit Suggestion
                  </Button>
                </div>
              </Modal>
              <Modal
                w="lg:1/3"
                cname="mt-4 w-full"
                buttonName="Testimonial Submission"
                title="Testimonial Submission"
                text="Thank you for using our service! Input your testimonial here and it will be sent for approval!"
              >
                &nbsp;
                <textarea
                  id="testimonyInput"
                  placeholder="Testimonial Description"
                  value={testimonialContent}
                  onChange={(ctx) => setTestimonialContent(ctx.target.value)}
                  className="bg-polar-300 mt-3 h-32 w-full rounded-md p-2 hover:bg-polar-400 text-white focus:outline-none transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400"
                />
                <Button
                  onClick={() => {
                    API.submitTestimonial(testimonialContent)
                      .then((data) => {
                        setUser(
                          Object.assign(user, {
                            testimonial: data.testimonial,
                          })
                        );
                        sendToast(data.message, "success");
                      })
                      .catch((err) => {
                        sendToast(err.data.message, "error");
                      });
                  }}
                  cname="bg-polar-300 hover:bg-polar-400 w-full mt-2 h-11"
                >
                  Submit Testimonial
                </Button>
              </Modal>
              <Button
                cname="w-full mt-3 shadow-none border border-2 border-aurora-red-300 ease-in duration-500 hover:bg-aurora-red-300 "
                variant="none"
              >
                Edit Domain
              </Button>
              <Button
                cname="w-full mt-3 shadow-none border border-2 border-aurora-yellow ease-in duration-500 hover:bg-aurora-yellow  "
                variant="none"
                onClick={() => {
                  router.push("/config");
                }}
              >
                Download Config
              </Button>

              <div className="text-white mt-3">
                <h1 className="text-2xl font-medium text-snow-100 ">Tools</h1>
                <div className="divide-y-2 divide-white mt-2 mb-3">
                  <div />
                  <div />
                </div>
                <span className=" text-snow-100">File Upload</span>
                <input
                  type="file"
                  className="block cursor-pointer w-full text-sm text-snow-100 rounded-r bg-polar-300 file:mr-3 file:cursor-pointer file:p-2 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-polar-400 file:text-aurora-yellow hover:file:bg-polar-600"
                  onChange={(ctx) => {
                    API.uploadImage(
                      user.uploadKey as string,
                      ctx.target.files![0]
                    )
                      .then((data) => {
                        navigator.clipboard.writeText(data.imageURL);

                        setUser((oldUser) =>
                          Object.assign(oldUser, {
                            uploads: [data.file, ...oldUser.uploads],
                          })
                        );

                        setTimeout(() => {
                          setRecentlyUploaded(data.cdnURL);
                        }, 1000);

                        sendToast(
                          "Successfully uploaded image, url has been copied to your clipboard.",
                          "success"
                        );
                      })
                      .catch((err) => {
                        sendToast(
                          <>
                            Something went wrong. If this error persists please
                            contact support.
                            <br />
                            Error Returned: {err.data.message}
                          </>,
                          "error"
                        );
                      });
                  }}
                />
                <div className=" text-snow-100 mt-2 mb-1">Edit Portfolio</div>
                <div className="flex space-x-2">
                  <Button variant="danger" cname="w-full">
                    Privated
                  </Button>
                  <Button cname="w-full">Edit Page</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
