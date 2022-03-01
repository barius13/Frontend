import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <svg className="bg-polar-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 160">
        <path fill="#141517" fill-opacity="1" d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <footer className="py-7 text-gray-200 bg-polar-100 xl:pb-10">
        <div className="grid max-w-screen-xl gap-6 px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div>
            <h5 className="text-xl font-bold text-gray-300">Legal</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy">
                    <a className="text-base hover:text-gray-300">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="text-base hover:text-gray-300">
                      Terms of Service
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-300">Contacts</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="mailto:support@kythi.com" passHref>
                    <a href="#" className="text-base hover:text-gray-300">
                      <span>Email Us</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/B82cvdZWem">
                    <a className="text-base hover:text-gray-300">
                      Discord Server
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-300">Links</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/KythiX">
                    <a
                      className="text-base hover:text-gray-300"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://kythi.bio/">
                    <a
                      className="text-base hover:text-gray-300"
                      target="_blank"
                    >
                      Kythi Portfolio&apos;s
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-300">Credits</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/bbrooklyn">
                    <a
                      className="text-base hover:text-gray-300"
                      target="_blank"
                    >
                      Brooklyn - Frontend
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/NahSahh">
                    <a
                      className="text-base hover:text-gray-300"
                      target="_blank"
                    >
                      NahSahh - Frontend
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Kurpp">
                    <a
                      className="text-base hover:text-gray-300"
                      target="_blank"
                    >
                      Kurp - Backend/CDN/Bot
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto mt-16 space-y-4 lg:px-8 xl:px-4 md:flex-row lg:mt-20">
          <div className="space-y-4 text-sm text-center md:space-y-1 md:text-left">
            <p>
              &copy;2021&nbsp;
              <Link href="https://github.com/KythiX">
                <a
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                >
                  Kythi
                </a>
              </Link>&nbsp;
              | All rights reserved
            </p>
            <p>Designed and maintained by KythiX</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
