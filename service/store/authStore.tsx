import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  setLogin: (accessToken: string, refreshToken: string, user: AuthState['user']) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  setLogin: (accessToken, refreshToken, user) =>
    set({
      accessToken,
      refreshToken,
      user,
    }),
  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      user: null,
    }),
}));
