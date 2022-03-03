import Link from 'next/link';

export default function Terms() {
  return (
    <div className="mt-24 flex flex-col place-items-center">
      <div className="w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <h2 className="text-4xl font-bold text-snow-300">Terms Of Service</h2>
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-200 p-4 text-white">
        <span className="font-medium text-snow-200 lg:text-xl">
          When using our service you agree to the following conditions:
        </span>
        <div className="ml-8 mt-3 mb-5 text-snow-100">
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
          <li>
            We have the right to discontinue the product at any time for any
            reason, without providing any notice.
          </li>
        </div>
        <span className="font-medium text-snow-200 lg:text-xl">
          Your Account
        </span>
        <div className="ml-8 mt-3 mb-8 text-snow-100">
          <li>
            You are responsible for maintaining the confidentiality of your
            credentials and any activity resulting from the use of them on
            Kythi.
          </li>
          <li>
            Attempts to disrupt the traffic of our service by any method is
            strictly prohibited and will result in account termination.
          </li>
          <li>
            Following the&nbsp;
            <Link href="https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule">
              <a
                className=" text-frost-300 underline underline-offset-2 hover:text-frost-400"
                target="_blank"
              >
                Children&apos;s Online Privacy Protection Act
              </a>
            </Link>
            , you must be over the age of 13 to use our service. You will be
            terminated if you are found to be under the age of 13.
          </li>
          <li>
            Sharing your account with anyone is strictly prohibited, and will
            result in account termination.
          </li>
        </div>
        <span className="font-medium text-snow-200 lg:text-xl">
          Your Content
        </span>
        <div className="ml-8 mt-3 mb-8 text-snow-100">
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
      </div>
      <div className="mt-3 w-full max-w-5xl rounded-lg bg-polar-200 p-6 text-white">
        <div className="text-center font-bold">
          Terms of Service was last updated on the: &quot;2nd March 2022&quot;
        </div>
        <div className="mt-2 text-center">
          We Reserve the right to update the Terms Of Service at any given time.
        </div>
      </div>
    </div>
  );
}
