import { create } from "zustand";

export const useUserStore = create((set) => ({
  token: null,
  current: null,
}));
