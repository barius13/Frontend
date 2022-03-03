import Link from 'next/link';

export default function Policy() {
  return (
    <div className="flex flex-col place-items-center p-2">
      <div className="mt-24 w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <h2 className="text-4xl font-bold text-snow-300">Privacy Policy</h2>
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <span className="font-medium text-snow-200 lg:text-xl">
          Data We Collect
        </span>
        <div className="ml-8 mt-3 mb-5 text-snow-100">
          <li>Your Username</li>
          <li>Hashed password (Hashed using argon2i)</li>
          <li>The person that invited you</li>
          <li>Unique verification code</li>
        </div>
        <span className="font-medium text-snow-200 lg:text-xl">
          Discord Linking
        </span>
        <div className="ml-8 mt-3 mb-8 text-snow-100">
          <li>Your Discord ID</li>
          <li>Your Discord Username</li>
          <li>Your Discord Discriminator</li>
          <li>Your Discord Avatar</li>
          <li>Your Discord Subscription status (Classic/Premium)</li>
        </div>
        <span className="font-medium text-snow-200 lg:text-xl">
          Data Retention
        </span>
        <div className="ml-8 mt-3 mb-5 text-snow-100">
          <li>
            if you would like to request your data to be forwarded to you please
            email us at&nbsp;
            <a
              href="mailto:support@kythi.com"
              className="font-medium text-snow-100 underline hover:text-snow-300"
            >
              support@kythi.com
            </a>
          </li>
          <li>
            if you&apos;d like to delete your account, you can do so by going to
            the&nbsp;
            <Link href="/settings">
              <a className=" text-frost-300 underline-offset-2 hover:text-frost-400">
                Settings&nbsp;
              </a>
            </Link>
            page and clicking on the delete account button.
          </li>
        </div>
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <div className="text-center font-bold">
          Privacy policy was last updated on the: &quot;2nd March 2022&quot;
        </div>
        <div className="mt-2 text-center">
          We Reserve the right to update this privacy policy at any given time.
        </div>
      </div>
    </div>
  );
}
