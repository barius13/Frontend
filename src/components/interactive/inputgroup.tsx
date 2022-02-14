import { FC } from "react";

interface Input {
  text?: string;
  show?: boolean;
  value?: any;
  onChange?: any;
  textCname?: string;
  inputCname?: string;
  PlaceHolder: string;
  keepBorder?: boolean;
}

const Input: FC<Input> = ({
  text,
  show,
  value,
  onChange,
  textCname = "",
  inputCname = "",
  keepBorder,
  PlaceHolder,
}) => {
  return (
    <>
      <div className="flex">
        <span
          className={`flex items-center px-2 p-2 bg-zinc-700 text-white text-sm ${
            show || "hidden"
          } ${textCname}`}
        >
          {text}
        </span>
        <input
          value={value}
          onChange={onChange}
          spellCheck={false}
          className={`px-2 bg-polar-300 border-r-polar-400 ${
            keepBorder && "border-r-2"
          } focus:outline-none transition duration-500 p-2 delay-75 focus:duration-500 focus:bg-polar-400 ${inputCname}`}
          placeholder={PlaceHolder}
        />
      </div>
    </>
  );
};

export default Input;
