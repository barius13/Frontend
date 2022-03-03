import API from '../api';
import React from 'react';
import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import {Toaster} from 'react-hot-toast';
import {months} from '../utils/Constants';
import {useEffect, useState} from 'react';
import {useUser} from '../components/user';
import {formatBytes} from '../utils/Format';
import {sendToast} from '../utils/sendToast';
import Nav from '../components/navigators/navbar';
import Modal from '../components/interactive/modal';
import StatsBox from '../components/cards/userstats';
import relativeTime from 'dayjs/plugin/relativeTime';
import Button from '../components/interactive/button';
import {
  ChartSquareBarIcon,
  ServerIcon,
  CloudUploadIcon,
} from '@heroicons/react/outline';

dayjs.extend(relativeTime);

export default function Dashboard() {
  const router = useRouter();
  const {user, setUser} = useUser();
  const [recentlyUploaded, setRecentlyUploaded] = useState(
    user?.uploads[0]
      ? `${process.env.CDN_URL}/${process.env.CDN_BUCKET}/${user?.id}/${user?.uploads[0]?.cdnName}`
      : `${process.env.CDN_URL}/${process.env.CDN_BUCKET}/sys/File_Not_Found_1.png`
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
      router.push('/');
    } else if (!user.discordId) {
      router.push('/discord');
    } else {
      API.getPing().then((ping) => {
        setStats({...stats, userPing: ping});
      });
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />
      <Nav page={'dash'} />

      <div className="flex h-max flex-col items-center justify-center bg-polar-100 p-10">
        <div className="mr-auto">
          <div className="text-3xl font-semibold text-white">
            Welcome, {user.username}
          </div>
          <div className="mb-4 text-xl text-snow-300 lg:mb-8">
            Member since {getDate(user.createdAt).month}&nbsp;
            {getDate(user.createdAt).day} {getDate(user.createdAt).year}
          </div>
        </div>
        <div className="flex flex-col flex-nowrap space-y-10 md:flex-col lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex w-full flex-col flex-nowrap space-y-4 text-white">
            <div className="flex w-full flex-col items-stretch space-y-3 md:flex-col lg:flex-row lg:space-y-0 lg:space-x-4">
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
                  content={`${formatBytes(
                    user.uploads.reduce((a, b) => a + b.size, 0)
                  )}`}
                  icon={<ServerIcon className="h-6 w-6 text-aurora-red-300" />}
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
            <div className="flex w-full flex-col space-x-0 space-y-10 md:flex-col md:space-x-0 md:space-y-10 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="w-full rounded-md bg-polar-200 p-6 shadow-lg md:p-6">
                <div className="flex items-baseline justify-between ">
                  <h4 className="mt-1 text-xl font-bold text-snow-100 lg:text-2xl">
                    Latest Upload
                  </h4>
                </div>
                <div className="mt-3 cursor-pointer duration-700">
                  {recentlyUploaded.endsWith('mp4') ||
                  recentlyUploaded.endsWith('mov') ||
                  recentlyUploaded.endsWith('webm') ? (
                    <video
                      src={recentlyUploaded}
                      className="flex max-h-64 w-full rounded-xl object-cover duration-100 hover:-translate-y-1 hover:shadow-xl"
                      controls
                    />
                  ) : (
                    <img
                      src={recentlyUploaded}
                      alt="Recently Uploaded Image"
                      className="flex max-h-64 w-full rounded-xl object-cover duration-100 hover:-translate-y-1 hover:shadow-xl"
                      onClick={() => {
                        window.open(recentlyUploaded, '_blank');
                      }}
                    />
                  )}
                </div>
                <div
                  className={`mt-3 flex items-center justify-between rounded-md border-l-2 border-l-frost-300 bg-polar-400 px-4 py-4 ${
                    !user.uploads[0] && 'invisible absolute'
                  }`}
                >
                  <div className="flex items-center">
                    <img
                      src={user.discord?.avatar as string}
                      className="mr-2 h-8 w-8 rounded-full"
                      alt="User Avatar"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-snow-300">
                        You, {user.username}
                      </span>
                      <span className="text-xs font-medium text-snow-100">
                        {dayjs().to(dayjs(user.uploads[0]?.uploadedAt))}
                      </span>
                    </div>
                  </div>
                  <Modal
                    buttonName="Delete"
                    cname="bg-polar-400 danger h-9 shadow-none"
                    text="Are you sure you want to delete this File? This action
                          is not reversible. This will permanently delete the
                          File from our servers. This action is irreversible!"
                    title="Delete File"
                    w="max-w-2xl"
                  >
                    <div className="mt-6">
                      <Button
                        onClick={() => {
                          sendToast('Successfully deleted File!', 'success');
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

              <div className="w-full rounded-md bg-polar-200 p-6 shadow-lg md:p-6">
                <div className="flex items-baseline justify-between ">
                  <h4 className="mt-1 text-xl font-bold text-snow-100 lg:text-2xl">
                    Announcements{' '}
                  </h4>
                </div>
                <p className="mt-4 rounded-md border-l-2 border-l-white bg-polar-400 py-2 px-2 text-snow-200">
                  Welcome to kythi we thank you for taking an interest in our
                  service! We are currently in beta and we are working on a lot
                  of features and bug fixes. We will be adding more features and
                  bug fixes in the future. We hope you enjoy your stay!
                </p>
                <div className="mt-2 flex items-center justify-between rounded-md border-l-2 border-l-frost-300 bg-polar-400 px-2">
                  <div className="mb-4 mt-3 flex items-center">
                    <img
                      className="mr-2 h-10 w-10 rounded-full"
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
          <div className="rounded-md bg-polar-200 p-6 shadow-lg md:p-6">
            <div className="flex items-baseline justify-between">
              <h4 className="mt-1 text-xl font-medium text-snow-100 lg:text-2xl">
                Quick Links
              </h4>
            </div>
            <Modal
              w="max-w-2xl"
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
                  className="-mt-3 h-24 w-full rounded-md bg-polar-300 p-2 transition delay-75 duration-500 hover:bg-polar-400 focus:bg-polar-400 focus:outline-none focus:duration-500"
                />
                <Button
                  onClick={() => {
                    sendToast('Successfully Sent Suggestion!', 'success');
                  }}
                  cname="bg-polar-300 hover:bg-polar-400 w-full mt-2 h-11"
                >
                  Submit Suggestion
                </Button>
              </div>
            </Modal>

            <Modal
              w="max-w-2xl"
              text="We're sorry you had a bad experience please list exactly what
                occured so we can fix it as soon as possible!"
              title="Bug Report"
              buttonName="Bug Report"
              cname="w-full mt-4"
            >
              <div>
                <textarea
                  placeholder="Bug Description"
                  className="mt-3 h-10 w-full rounded-md bg-polar-300 p-2 caret-white transition delay-75 duration-500 hover:bg-polar-400 focus:bg-polar-400 focus:outline-none focus:duration-500 "
                />
                <select className=" mt-3 h-10 w-full appearance-none rounded border-0  bg-polar-300 px-2 text-sm font-medium text-white outline-none">
                  <option disabled={false} selected={true}>
                    How Severe is this bug?
                  </option>
                  <option>Minor</option>
                  <option>Moderate</option>
                  <option>Major</option>
                </select>
                <div className="mt-3 font-semibold text-snow-100">
                  Before Submitting please check if there is any announcement of
                  the error being fixed. Thanks!
                </div>
                <Button
                  onClick={() => {
                    sendToast('Successfully Sent Bug Report.', 'success');
                  }}
                  cname="bg-polar-300 hover:bg-polar-400 w-full h-11 mt-3"
                >
                  Submit Suggestion
                </Button>
              </div>
            </Modal>
            <Modal
              cname="mt-4 w-full"
              w="max-w-2xl"
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
                className="-mt-3 h-32 w-full rounded-md bg-polar-300 p-2 caret-white transition delay-75 duration-500 hover:bg-polar-400 focus:bg-polar-400 focus:outline-none focus:duration-500 "
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
                      sendToast(data.message, 'success');
                    })
                    .catch((err) => {
                      sendToast(err.data.message, 'error');
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
                router.push('/config');
              }}
            >
              Download Config
            </Button>

            <div className="mt-3 text-white">
              <h1 className="text-2xl font-medium text-snow-100 ">Tools</h1>
              <span className=" text-snow-100">File Upload</span>
              <input
                type="file"
                className="block w-full cursor-pointer rounded-r bg-polar-300 text-sm text-snow-100 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-polar-400 file:p-2 file:text-sm file:font-medium file:text-aurora-yellow hover:file:bg-polar-600"
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
                        'Successfully uploaded image, url has been copied to your clipboard.',
                        'success'
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
                        'error'
                      );
                    });
                }}
              />
              <div className=" mt-2 mb-1 text-snow-100">Edit Portfolio</div>
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
  ) : null;
}
