import React from 'react';
import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {Toaster} from 'react-hot-toast';
import {useUser} from '../components/user';
import {sendToast} from '../utils/sendToast';
import Nav from '../components/navigators/navbar';
import Button from '../components/interactive/button';

export default function Settings() {
  const router = useRouter();
  const {user} = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else if (!user.discordId) {
      router.push('/discord');
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />
      <Nav page="" />

      <div className="flex flex-col items-center justify-center p-2">
        <div className="mt-24 w-full max-w-xl rounded-md bg-polar-200 p-6 text-center text-white">
          <h1 className="mt-3 flex text-xl font-semibold text-snow-300">
            Profile Settings
          </h1>
          <div className="mr-auto flex flex-col text-left text-sm text-snow-300">
            Signed in as&nbsp;
            {user.username}, {user.email}
          </div>

          <div className="mt-3 flex font-semibold">Username</div>
          <input
            className="delay-50 mt-2 block h-8 rounded-md bg-polar-300 py-2 pl-2 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:border-frost-300 hover:bg-polar-400 hover:ring-2 hover:ring-frost-300 focus:border-frost-400 focus:outline-none focus:ring-2 focus:ring-frost-400 sm:text-sm"
            placeholder={user.username}
            type="text"
          />
          <div className="mt-3 flex font-semibold">Password</div>

          <div className="mt-2 flex flex-col md:flex-row md:space-x-2 lg:flex-row lg:space-x-2">
            <input
              className="delay-50 block h-8 rounded-md bg-polar-300 py-2 pl-2 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:border-frost-300 hover:bg-polar-400 hover:ring-2 hover:ring-frost-300 focus:border-frost-400 focus:outline-none focus:ring-2 focus:ring-frost-400 sm:text-sm"
              placeholder={'Current Password'}
              type="password"
            />
            <input
              className="delay-50 mt-2 block h-8 rounded-md bg-polar-300 py-2 pl-2 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:border-frost-300 hover:bg-polar-400 hover:ring-2 hover:ring-frost-300 focus:border-frost-400 focus:outline-none focus:ring-2 focus:ring-frost-400 sm:text-sm md:mt-0 lg:mt-0"
              placeholder={'New Password'}
              type="password"
            />
          </div>

          <div className="mt-3 flex font-semibold">Email Address</div>

          <div className="mt-2 flex flex-col md:flex-row md:space-x-2 lg:flex-row lg:space-x-2">
            <input
              className="delay-50 block h-8 rounded-md bg-polar-300 py-2 pl-2 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:border-frost-300 hover:bg-polar-400 hover:ring-2 hover:ring-frost-300 focus:border-frost-400 focus:outline-none focus:ring-2 focus:ring-frost-400 sm:text-sm"
              placeholder={user.email}
              name="email"
            />
            <input
              className="delay-50 mt-2 block h-8 rounded-md bg-polar-300 py-2 pl-2 text-white caret-white shadow-sm transition duration-700 placeholder:text-gray-400 hover:border-frost-300 hover:bg-polar-400 hover:ring-2 hover:ring-frost-300 focus:border-frost-400 focus:outline-none focus:ring-2 focus:ring-frost-400 sm:text-sm md:mt-0 lg:mt-0"
              placeholder={'New Email'}
              name="email"
            />
          </div>
          <div className="flex flex-col justify-between md:flex-row md:space-x-8 lg:flex-row lg:space-x-8">
            <span>
              <span className="mt-3 flex font-semibold">Delete Account</span>
              <span className="mr-auto flex">
                Upon Deletion you wipe all of your data.
              </span>
            </span>
            <Button
              cname="md:w-36 w-full lg:w-36 lg:mt-6 md:mt-6 mt-2 h-9"
              variant="danger"
              size="md"
              onClick={() =>
                sendToast(
                  'Successfully deleted your account, logging out.',
                  'success'
                )
              }
            >
              Delete Account
            </Button>
          </div>
          <Button
            onClick={() => {
              sendToast('Successfully updated Account Settings.', 'success');
            }}
            variant="success"
            cname="w-full mt-2"
          >
            Save Changes
          </Button>
        </div>
        <div className="mt-3 w-full max-w-xl rounded-md bg-polar-200 px-3 py-4 text-center text-white md:px-6 lg:px-6">
          <h2 className="mt-3 mb-1 flex text-xl font-semibold text-snow-300">
            Two Factor Authentication
          </h2>
          <div className="flex text-sm text-snow-300">
            2fa is currently set as&nbsp;
            <span className="text-red-300">Disabled</span>
          </div>
          <div className="mt-1 flex max-w-lg text-left text-xs text-snow-300">
            <span>
              You will be required to enter code to gain access to your account.
              This code is generated using google authenticator. If you lose
              access to your authenticator app, you will have to contact{' '}
              <Link href="mailto:support@kythi.com" passHref>
                <a
                  href="#"
                  className="text-blue-300 underline underline-offset-1 hover:text-blue-400"
                >
                  <span>Support&nbsp;</span>
                </a>
              </Link>
              to reset your code.
            </span>
          </div>
          <div className="flex flex-col justify-between text-left">
            <Button cname="w-full h-9 mt-3" variant="primary" size="md">
              Enable 2fa
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
