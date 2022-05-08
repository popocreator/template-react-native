import {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {themeState} from '../stores';

export default function _useColor() {
  const theme = useRecoilValue(themeState);
  const color = useCallback((normal: string, dark: string) => {
    if (theme === 'dark') return dark;
    return normal;
  }, []);

  return color;
}
