import { FC } from "react";

interface Props {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  disabled?: boolean;
  cname?: string;
}

const Button: FC<Props> = ({
  children,
  variant = "default",
  size = "md",
  disabled,
  cname = "",
  ...rest
}) => {
  return (
    <button
      className={
        `btn ${variant} ${size}` + (disabled ? " disabled" : "") + `{cname}`
      }
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
