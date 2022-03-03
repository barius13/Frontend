import {useRouter} from 'next/router';
import {useUser} from '../components/user';
import Button from '../components/interactive/button';

export default function Page404() {
  const router = useRouter();
  const {user} = useUser();

  return (
    <>
      <div className="">
        <div className="flex h-screen items-center justify-center	text-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-snow-200">
              404 - Unavailable
            </h1>
            <p className="px-4 text-snow-100">
              Four Oh Four, it looks like the page you are looking for is
              unavailable
            </p>

            <Button
              size="lg"
              variant="info"
              cname="mt-4 h-9"
              onClick={() => router.push(user ? '/dashboard' : '/')}
            >
              {user ? 'Go To Dashboard' : 'Go To Home'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
