import Toast, {ToastOptions} from 'react-native-root-toast';

export interface ToastControllerReturnProps {
  show: (message: string, options: ToastOptions) => void;
}

function ToastController(): ToastControllerReturnProps {
  let toastOptions: ToastOptions = {
    containerStyle: undefined,
    duration: undefined,
    visible: undefined,
    position: undefined,
    animation: undefined,
    shadow: undefined,
    backgroundColor: undefined,
    opacity: undefined,
    shadowColor: undefined,
    textColor: undefined,
    textStyle: undefined,
    delay: undefined,
    keyboardAvoiding: undefined,
    hideOnPress: undefined,
    onHide: undefined,
    onHidden: undefined,
    onShow: undefined,
    onShown: undefined,
    onPress: undefined,
  };

  return {
    show: (message, options) => {
      Toast.show(message, toastOptions || options);
    },
  };
}

export default ToastController();
