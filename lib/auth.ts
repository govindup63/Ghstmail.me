"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token: string | null;
  email: string | null;
  isAuthenticated: boolean;
  login: (token: string, email: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      email: null,
      isAuthenticated: false,
      login: (token, email) => set({ token, email, isAuthenticated: true }),
      logout: () => set({ token: null, email: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);