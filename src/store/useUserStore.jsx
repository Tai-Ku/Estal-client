import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { apiGetRoles } from "~/apis/auth";
import { apiGetProfileUser } from "~/apis/user";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      roles: [],
      setToken: (token) => set(() => ({ token })),
      getProFileUser: async () => {
        const res = await apiGetProfileUser();
        if (res?.success) return set(() => ({ user: res.user }));
        else return set(() => ({ user: null, token: null }));
      },
      getRoles: async () => {
        const res = await apiGetRoles();
        if (res.success) return set(() => ({ roles: res.roles }));
        else return set(() => ({ roles: [] }));
      },
      logOut: () => set(() => ({ token: null, user: null })),
    }),
    {
      name: "rest-06",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
