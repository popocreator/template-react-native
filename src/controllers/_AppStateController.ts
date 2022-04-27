import {AppStateStatic, NativeEventSubscription} from 'react-native';

export interface AppStateControllerProps {
  appState: AppStateStatic;
  onActive?: () => void;
}

export interface AppStateControllerReturnProps {
  init: () => void;
  clear: () => void;
}

export default function AppStateController({
  appState,
  onActive,
}: AppStateControllerProps): AppStateControllerReturnProps {
  let subscription: NativeEventSubscription;

  const onChange = (nextAppState: string) => {
    if (
      appState.currentState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('앱이 활성화되었습니다');
      onActive && onActive();
    }
  };

  return {
    init: () => {
      subscription = appState.addEventListener('change', onChange);
    },
    clear: () => {
      if (subscription) {
        subscription.remove();
      }
    },
  };
}
