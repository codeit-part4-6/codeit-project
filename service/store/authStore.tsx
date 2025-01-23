import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userInfo: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  setLogin: (accessToken: string, refreshToken: string, userInfo: AuthState['userInfo']) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  userInfo: null,
  setLogin: (accessToken, refreshToken, userInfo) =>
    set({
      accessToken,
      refreshToken,
      userInfo,
    }),
  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      userInfo: null,
    }),
}));
