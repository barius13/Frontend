export default function Policy() {
  return (
    <div className="grid place-items-center md:grid-cols-1 h-screen">
      <div className="text-white bg-polar-200 lg:px-10 lg:py-10 py-4 px-4 rounded-lg w-4/5">
        <div className="divide-y-2 divide-white">
          <h2 className=" font-bold text-snow-300 lg:text-4xl md:mb-6 text-center">
            Privacy Policy
          </h2>
          <div className="md:mb-5 " />
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          Data We Collect
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-5">
          <li>Your Username</li>
          <li>Hashed password (Hashed using argon2i)</li>
          <li>The person that invited you</li>
          <li>Unique verification code</li>
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          Discord Linking
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-8">
          <li>Your Discord ID</li>
          <li>Your Discord Username</li>
          <li>Your Discord Discriminator</li>
          <li>Your Discord Avatar</li>
          <li>Your Discord Subscription status (Classic/Premium)</li>
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          Data Retention
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-5">
          <li>
            if you would like to request your data to be forwarded to you please
            email us at{" "}
            <a
              href="mailto:support@kythi.com"
              className="font-medium text-snow-100 underline hover:text-snow-300"
            >
              support@kythi.com
            </a>
          </li>
          <li>
            if you'd like to delete your account, you can do so by going to the{" "}
            <a
              className=" text-frost-300 hover:text-frost-400 underline-offset-2"
              href="/settings"
            >
              Settings
            </a>{" "}
            page and clicking on the delete account button.
          </li>
        </div>
        <div className="divide-y-2 divide-white">
          <div />
          <div />
        </div>
        <div className="text-center mt-2">
          We Reserve the right to update this privacy policy at any given time.
        </div>
        <div className="text-center mt-3 font-bold">
          This privacy policy was last updated on the: &quot;13th Febuary
          2022&quot;
        </div>
      </div>
    </div>
  );
}
