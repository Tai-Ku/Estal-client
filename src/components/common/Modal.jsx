import React from "react";
import { useAppStore } from "~/store/useAppStore";

const Modal = () => {
  const { contentModal, setModal } = useAppStore();

  return (
    <div
      onClick={() => setModal(false, null)}
      className="absolute z-[999] top-0 left-0 w-screen flex justify-center items-center h-screen bg-overlay-30"
    >
      {contentModal}
    </div>
  );
};

export default Modal;
