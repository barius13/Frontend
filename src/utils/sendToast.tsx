import toast from "react-hot-toast";
import { CheckmarkIcon, ErrorIcon } from "react-hot-toast";

export const sendToast = (content: string, toastType: "success" | "error") =>
  toast.custom(
    (t) => (
      <div
        className={`flex flex-row items-center justify-between bg-polar-200 px-4 py-4 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out lg:w-auto  ${
          t.visible ? "top-0" : "-top-96"
        }`}
        onClick={() => {
          toast.dismiss(t.id);
        }}
      >
        <div className="text-xl">
          {toastType === "success" ? <CheckmarkIcon /> : <ErrorIcon />}
        </div>
        <div className="flex flex-col items-start justify-center ml-4 cursor-default">
          <h1 className={`text-base text-gray-200 font-semibold mr-auto w-60`}>
            {toastType === "success" ? "Success" : "Error"}
          </h1>
          <p className="text-sm text-gray-400 mt-2 ">{content}</p>
        </div>
      </div>
    ),
    { position: "top-right", duration: 2000 }
  );
