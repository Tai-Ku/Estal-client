import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  isShowModal: false,
  contentModal: null,
  setModal: (isShowModal, contentModal) =>
    set(() => ({
      isShowModal,
      contentModal,
    })),
}));
