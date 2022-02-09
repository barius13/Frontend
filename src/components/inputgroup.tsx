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
        className={`flex items-center px-2 p-2 bg-zinc-700 text-white text-sm max-w-[82px] ${
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
        } focus:outline-none w-32 transition duration-500 p-2 delay-75 focus:duration-500 focus:bg-polar-400 ${
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
