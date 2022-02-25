import API from "../../api";
import Link from "next/link";
import * as React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Button from "../interactive/button";
import { useUser } from "../user";
import { sendToast } from "../../utils/sendToast";
import { Menu, Transition } from "@headlessui/react";

interface NavBarProps {
  page: "dash" | "config" | "gallery" | "";
}

interface ButtonProps {
  name: string;
  onClick: () => void;
  isHighlighted: boolean;
}

/**
 * Its a NavBar Button!
 * @param {React.PropsWithChildren<ButtonProps>} props Props
 * @return {React.FunctionComponent}
 */
const NavBarButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      cname={`ml-4 py-1.5 text-sm font-medium mb-1 ${
        props.isHighlighted ? "bg-blue-600" : "bg-polar-400"
      } 
      ${props.isHighlighted ? "hover:bg-blue-500" : "hover:bg-polar-600"}`}
      onClick={props.onClick}
      variant="none"
    >
      {props.name}
    </Button>
  );
};

/**
 * Its a NavBar!
 * @param {React.PropsWithChildren<NavBarProps>} props Props
 * @return {React.FunctionComponent}
 */
const NavBar: React.FC<NavBarProps> = (props) => {
  const { user, setUser } = useUser();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-justify mx-auto px-4 bg-polar-200 w-full h-14">
        <Link href="/">
          <a className="text-2xl font-bold text-white mb-2 ml-2 lg:ml-0 sm:ml-0">
            Kythi&nbsp;
          </a>
        </Link>
        <span className="text-2xl font-bold text-white mb-2 hidden md:flex">
          |
        </span>

        <div className="hidden md:flex">
          <NavBarButton
            name="Dashboard"
            isHighlighted={props.page === "dash"}
            onClick={() => {
              router.push("/dashboard");
            }}
          />
          <NavBarButton
            name="Configuration"
            isHighlighted={props.page === "config"}
            onClick={() => {
              router.push("/config");
            }}
          />
          <NavBarButton
            name="Gallery"
            isHighlighted={props.page === "gallery"}
            onClick={() => {
              router.push("/gallery");
            }}
          />
        </div>
        <div className="flex ml-auto">
          <Menu className="relative inline-block text-left" as="div">
            <div>
              <Menu.Button className="flex shadow-lg px-4 py-2">
                <img
                  src={user.discord?.avatar as string}
                  className="rounded-full h-8 w-8"
                />
                <div className="ml-2">
                  <p className="text-white text-sm font-bold">
                    {user.username}
                  </p>
                  <p className="text-frost-300 text-xs">Admin</p>
                </div>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              leave="transition ease-in duration-100"
            >
              <Menu.Items className="absolute right-2 p-2 mt-2 w-48 rounded-lg bg-polar-200 shadow-lg">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          navigator.clipboard.writeText(user.upload.key);
                          sendToast(
                            "Successfully copied your upload key to your clipboard",
                            "success"
                          );
                        }}
                        className={`text-white p-4 block rounded text-sm font-medium cursor-pointer ${
                          active && "bg-polar-300"
                        }`}
                      >
                        Copy Upload Key
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          router.push("/settings");
                        }}
                        className={`text-white p-4 block rounded text-sm font-medium cursor-pointer ${
                          active && "bg-polar-300"
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={async () => {
                          try {
                            await API.logOut();
                          } finally {
                            // @ts-expect-error
                            setUser(null);
                            router.push("/");
                          }
                        }}
                        className={`text-white p-4 block rounded text-sm font-medium cursor-pointer ${
                          active && "bg-polar-300"
                        }`}
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default NavBar;
