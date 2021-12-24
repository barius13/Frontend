export default function policy() {
  return (
    <div className="grid place-items-center md:grid-cols-1 h-screen">
      <div className="text-white bg-polar-200 lg:px-10 lg:py-10 py-4 px-4 rounded-lg w-4/5">
        <div className="divide-y-2 divide-frost-300">
          <h2 className=" font-bold text-snow-300 lg:text-4xl md:mb-6 text-center">
            Privacy Policy
          </h2>
          <div className="md:mb-5 " />
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          We collect the following data upon registering to our service:
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-5">
          <li>Your Username</li>
          <li>Hashed password (Hashed using argon2i)</li>
          <li>The person that invited you</li>
          <li>Unique verification code</li>
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          If you decide to link your Discord we will collect the following:
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-8">
          <li>Your Discord ID</li>
          <li>Your Discord Username</li>
          <li>Your Discord Discriminator</li>
          <li>Your Discord Avatar</li>
          <li>Your Discord Subscription status (Classic/Premium)</li>
        </div>
        <div className="divide-y-2 divide-frost-300">
          <div />
          <h2 className="font-bold text-snow-300 lg:text-2xl text-center">
            We (Kythi) do not knowingly collect any data of users under the age
            of 13 years old.
          </h2>
        </div>
        <div className="text-center">
          {'This privacy policy was last updated on the: "24th December 2021"'}
        </div>
      </div>
    </div>
  );
}
