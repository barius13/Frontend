import { FC } from "react";
import Button from "./button";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Modal {
  w?: string;
  text: string;
  title: string;
  open?: boolean;
  cname?: string;
  buttonName?: string;
  children?: React.ReactNode;
}

const Modal: FC<Modal> = ({
  w = "",
  text,
  open = false,
  title,
  cname,
  children,
  buttonName,
}) => {
  let [isOpen, setIsOpen] = useState(open);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button onClick={openModal} cname={cname}>
        {buttonName}
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto text-white"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 opacity-10 bg-black" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block p-6 my-8 overflow-hidden text-left align-middle max-w-4xl transition-all transform shadow-xl bg-polar-200 rounded-lg ${w}`}
              >
                <div className="flex justify-between">
                  <Dialog.Title as="h3" className="text-2xl font-medium ">
                    {title}
                  </Dialog.Title>
                  <Button
                    cname="h-9 w-9 text-sm font-medium rounded-lg"
                    variant="dark"
                    onClick={closeModal}
                  >
                    X
                  </Button>
                </div>
                <div>
                  <p className="font-medium text-snow-100">{text}</p>
                </div>

                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
