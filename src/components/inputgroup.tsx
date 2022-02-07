import { FC } from "react";

interface Input {
  text: string;
  PlaceHolder: string;
  keepBorder?: boolean;
  textOptions?: {
    rounded?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
  };
  inputOptions?: {
    rounded?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
  };
}

const Input: FC<Input> = ({
  text,
  PlaceHolder,
  keepBorder,
  textOptions,
  inputOptions,
}) => {
  return (
    <>
      <span
        className={`inline-flex items-center px-3 bg-zinc-700 p-2 text-white text-sm ${
          textOptions?.rounded && "rounded"
        } ${textOptions?.roundedLeft && "rounded-l"} ${
          textOptions?.roundedRight && "rounded-r"
        }`}
      >
        {text}
      </span>
      <input
        className={`px-2 bg-polar-300 border-r-polar-400 ${
          keepBorder && "border-r-2"
        } focus:outline-none w-32 transition duration-500 delay-75 focus:duration-500 focus:bg-polar-400 ${
          inputOptions?.rounded && "rounded"
        } ${inputOptions?.roundedLeft && "rounded-l"} ${
          inputOptions?.roundedRight && "rounded-r"
        }`}
        placeholder={PlaceHolder}
      />
    </>
  );
};

export default Input;
