import API from '../api';
import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useUser} from '../components/user';
import {DiscordWhite} from '../../public/svgs';
import Button from '../components/interactive/button';
import {LogoutIcon} from '@heroicons/react/outline';

export default function Discord() {
  const router = useRouter();
  const {user} = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else if (user.discordId) {
      router.push('/dashboard');
    }
  }, [router, user]);

  return user && !user.discordId ? (
    <>
      <div className="bg-polar-100">
        <div className="flex h-screen grid-rows-1 items-center justify-center px-4">
          <div className="rounded-lg bg-polar-200 p-10 text-center shadow-2xl lg:w-1/3">
            <h1 className="text-3xl font-bold text-snow-200 lg:text-4xl">
              Kythi • Discord Link
            </h1>
            <p className="mt-4 text-xl text-snow-100">
              Welcome to Kythi! Thank you for signing up to our service. To use
              our service you need to link your discord
            </p>

            <span className="mt-8 block w-full rounded-md shadow-sm">
              <Link href={`${process.env.API_URL}/discord/link`} passHref>
                <Button cname="w-full">
                  <div className="flex justify-center">
                    <DiscordWhite />
                    <div className="mt-[2px]">Link Discord</div>
                  </div>
                </Button>
              </Link>
            </span>
            <span className="mt-2 block w-full rounded-md shadow-sm">
              <Button
                variant="danger"
                cname="w-full"
                onClick={async () => {
                  try {
                    await API.logOut();
                  } finally {
                    // @ts-expect-error
                    setUser(null);
                    router.push('/');
                  }
                }}
              >
                <div className="flex justify-center">
                  <LogoutIcon className="h-6 w-6 text-white" />
                  <div className="mt-[2px]">Logout</div>
                </div>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
