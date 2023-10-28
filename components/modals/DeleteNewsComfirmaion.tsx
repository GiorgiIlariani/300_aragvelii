"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  showDeleteNewsModal: boolean;
  setShowDeleteNewsModal: any;
}

export default function DeleteNewsConfirmationModal() {
  //  show={isModalOpen}
  return (
    <Transition appear as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 h-[400px] rounded-[32px] p-6"
        // onClose={() => closeModal()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center border p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="transfor relative w-[624px] overflow-hidden rounded-[28px] bg-white p-14 text-left align-middle shadow-xl transition-all"></Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
