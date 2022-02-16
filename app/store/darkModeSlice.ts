import type { SetState } from 'zustand';
import type { StoreState } from './index';

export interface DarkModeSlice {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const createDarkModeSlice = (set: SetState<StoreState>) => ({
  darkMode: true,
  setDarkMode: (darkMode: boolean) => {
    set(() => ({ darkMode }));
  },
});

export default createDarkModeSlice;
