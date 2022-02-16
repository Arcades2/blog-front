import create from 'zustand';
import createDarkModeSlice from './darkModeSlice';
import type { DarkModeSlice } from './darkModeSlice';

export type StoreState = DarkModeSlice;

const useStore = create<StoreState>((set) => ({
  ...createDarkModeSlice(set),
}));

export default useStore;
