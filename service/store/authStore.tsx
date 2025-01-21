import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  setLogin: (accessToken: string, refreshToken: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  setLogin: (accessToken, refreshToken) =>
    set({
      isLoggedIn: true,
      accessToken,
      refreshToken,
    }),
  setLogout: () =>
    set({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
    }),
}));
