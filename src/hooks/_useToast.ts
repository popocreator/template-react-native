import {useCallback} from 'react';
import {ToastOptions} from 'react-native-root-toast';
import {ToastController} from '../controllers';

export default function _useToast() {
  const showToast = useCallback(
    (message: string, options?: ToastOptions | undefined) => {
      ToastController.show(message, options);
    },
    [],
  );

  return {showToast};
}
