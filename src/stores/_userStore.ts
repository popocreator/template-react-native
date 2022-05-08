import {atom, selector} from 'recoil';

// User information
export const userState = atom<object | null>({
  key: 'userState',
  default: null,
});

// Subscribtion plan
export const planState = atom<object | null>({
  key: 'planState',
  default: null,
});

// Screen access
export const accessState = selector<object | null>({
  key: 'accessState',
  get: ({get}) => {
    const plan = get(planState);
    return plan;
  },
});
