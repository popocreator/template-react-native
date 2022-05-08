import {atom, selector} from 'recoil';

// Memo list
export const memoState = atom<object[] | null>({
  key: 'memoState',
  default: null,
});
