import { Fragment } from "react";
import { Spinner } from "../../../public/svgs";
import { Transition } from "@headlessui/react";
import { FC, useRef, useState, useEffect, MouseEventHandler } from "react";

interface Props {
  id?: string;
  variant?:
    | "none"
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  cname?: string;
  disabled?: boolean;
  cooldown?: number;
  children: React.ReactNode;
  buttonType?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  id,
  size = "md",
  cname = "",
  onClick,
  children,
  variant = "default",
  disabled = false,
  cooldown = null,
  buttonType = "button",
}) => {
  const mounted = useRef(false);
  const [isCooldown, setCoolDown] = useState(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <button
      id={id}
      className={`btn ${variant} ${size} ${
        disabled && "disabled"
      } ${cname} transform transition ease-in-out duration-300`}
      type={buttonType}
      disabled={disabled}
      onClick={(ctx) => {
        if (cooldown) {
          if (isCooldown) return;

          setCoolDown(true);
          setTimeout(() => {
            if (mounted.current) setCoolDown(false);
          }, cooldown);
        }

        if (onClick) onClick(ctx);
      }}
    >
      <div className="flex justify-center">
        {isCooldown && <Spinner />}
        {children}
      </div>
    </button>
  );
};

export default Button;
