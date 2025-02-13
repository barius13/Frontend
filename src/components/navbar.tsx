import * as React from "react";
import { useUser } from "../components/user";
import Link from "next/link";

interface NavBarProps {
  page: "dash" | "config" | "gallery";
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
    <button
      className={`ml-4 py-1.5 px-4 text-sm font-medium rounded-md text-white transition duration-300 mb-1 bg-${
        props.isHighlighted ? "frost-400" : "polar-400"
      } hover:bg-${props.isHighlighted ? "frost-300" : "polar-300"} `}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

/**
 * Its a NavBar!
 * @param {React.PropsWithChildren<NavBarProps>} props Props
 * @return {React.FunctionComponent}
 */
const NavBar: React.FC<NavBarProps> = (props) => {
  const { user } = useUser();

  return (
    <>
      <div className="flex items-center flex-justify mx-auto px-4 bg-polar-200 shadow-2xl w-full h-14">
        <Link href="/">
          <a className="text-2xl font-bold text-white mb-2"> Kythi | </a>
        </Link>

        <div className=" hidden md:flex">
          <NavBarButton
            name="Dashboard"
            isHighlighted={props.page === "dash"}
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          />
          <NavBarButton
            name="Configuration"
            isHighlighted={props.page === "config"}
            onClick={() => {
              window.location.href = "/config";
            }}
          />
          <NavBarButton
            name="Gallery"
            isHighlighted={props.page === "gallery"}
            onClick={() => {
              window.location.href = "/gallery";
            }}
          />
        </div>
        <div className="flex ml-auto dropdown dropdown-end">
          <button tabIndex={0} className="flex ml-auto">
            <img
              src={user.discord?.avatar as string}
              className="rounded-full h-8 w-8"
            />
            <div className="ml-2">
              <p className="text-white text-sm font-bold">{user.username}</p>
              <p className="text-frost-300 text-xs">Admin</p>
            </div>
          </button>

          <ul
            tabIndex={0}
            className="p-2 py-4 px-4 shadow-2xl menu dropdown-content bg-polar-200 rounded-md w-52 mt-14"
          >
            <li>
              <a className="mb-1 font-semibold text-snow-200 hover:bg-polar-300 rounded-md py-2 px-2">
                Settings
              </a>
            </li>
            <li>
              <a className="mb-1 font-semibold text-snow-200 hover:bg-polar-300 rounded-md py-2 px-2">
                Logout
              </a>
            </li>
            <li>
              <a className="font-semibold text-snow-200 hover:bg-polar-300 rounded-md py-2 px-2">
                Copy Upload Key
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
