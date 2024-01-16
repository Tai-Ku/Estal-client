import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiGetProfileUser } from "~/apis/user";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      setToken: (token) => set(() => ({ token })),
      getProFileUser: async () => {
        const res = await apiGetProfileUser();
        if (res.success) return set(() => ({ user: res.user }));
      },
    }),
    {
      name: "rest-06",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token }),
    }
  )
);
