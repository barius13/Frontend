import { FC } from "react";

interface Props {
  children: React.ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  cname?: string;
}

const Button: FC<Props> = ({
  children,
  variant = "default",
  size = "md",
  disabled = false,
  cname = "",
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant} ${size} ${disabled && "disabled"} ${cname}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
