import {AppStateStatic, NativeEventSubscription} from 'react-native';

export interface AppStateControllerReturnProps {
  init: (appState: AppStateStatic, onActive?: () => void) => void;
  clear: () => void;
}

function AppStateController(): AppStateControllerReturnProps {
  let subscription: NativeEventSubscription;

  return {
    init: (appState, onActive) => {
      const onChange = (nextAppState: string) => {
        if (
          appState.currentState.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('앱이 활성화되었습니다');
          onActive && onActive();
        }
      };
      subscription = appState.addEventListener('change', onChange);
    },
    clear: () => {
      if (subscription) {
        subscription.remove();
      }
    },
  };
}

export default AppStateController();
