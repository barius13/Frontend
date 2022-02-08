import { FC, MouseEventHandler } from "react";

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
  buttonType = "button",
}) => {
  return (
    <button
      id={id}
      className={`btn ${variant} ${size} ${disabled && "disabled"} ${cname}`}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
