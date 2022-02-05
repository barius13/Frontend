import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
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
              &copy;2021{" "}
              <Link href="https://github.com/KythiX">
                <a
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                >
                  Kythi
                </a>
              </Link>{" "}
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
