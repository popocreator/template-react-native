import {atom, selector} from 'recoil';

// Theme
export const themeState = atom<string>({
  key: 'themeState',
  default: 'normal',
});
