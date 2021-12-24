export default function policy() {
  return (
    <div className="grid place-items-center md:grid-cols-1 h-screen">
      <div className="text-white bg-polar-200 lg:px-10 lg:py-10 py-4 px-4 rounded-lg w-4/5">
        <div className="divide-y-2 divide-frost-300">
          <h2 className=" font-bold text-snow-300 lg:text-4xl md:mb-6 text-center">
            Terms of Service
          </h2>
          <div className="md:mb-5 " />
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">
          When using our service you agree to the following conditions:
        </span>
        <div className="text-snow-100 ml-8 mt-3 mb-5">
          <li>
            We (Kythi) reserve the right to update the terms of service at any
            time, without prior notice.
          </li>
          <li>
            You are NOT allowed to perform a vulnerability test unless given
            explicit permissions by an
            <span className="text-aurora-red-300"> Administrator</span> or
            <span className="text-frost-200"> Developer</span>.
          </li>
          <li>
            By using our service, you agree that your access to the service may
            be terminated for any reason at any time.
          </li>
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">Your Account</span>
        <div className="text-snow-100 ml-8 mt-3 mb-8">
          <li>
            You are responsible for maintaining the confidentiality of your
            credentials and any activity resulting from the use of them on
            Kythi.
          </li>
          <li>
            Attempts to disrupt the traffic of our service by any method is
            strictly prohibited and will reuslt in account termination.
          </li>
          <li>
            Following the{" "}
            <a
              className=" text-frost-300 hover:text-frost-400 underline underline-offset-2"
              href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule"
            >
              {"Children's Online Privacy Protection Act"}
            </a>
            , you must be over the age of 13 to use our service. You will be
            terminated if you are found to be under the age of 13.
          </li>
          <li>
            Sharing your account with anyone is strictly prohibited, and will
            result in account termination.
          </li>
        </div>
        <span className="font-bold text-snow-200 lg:text-xl">Your Content</span>
        <div className="text-snow-100 ml-8 mt-3 mb-8">
          <li>
            The content that you upload to Kythi is your responsibility. We
            (Kythi) will not be held responsible for any content that you upload
            or share through our service.
          </li>
          <li>
            You are not allowed to upload any form of illicit content which
            include but are not limited to: Child Pornography, Copyrighted
            Content, Gore
          </li>
          <li>
            Uploading any file that contains malware, viruses or malicious code
            with intent to harm others or damage and disrupt the service is
            strictly prohibited.
          </li>
        </div>
        <div className="text-center font-bold">
          {
            'The Terms of Service were last updated on the: "24th December 2021"'
          }
        </div>
      </div>
    </div>
  );
}
