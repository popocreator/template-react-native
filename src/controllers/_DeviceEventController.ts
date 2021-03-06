import {DeviceEventEmitter} from 'react-native';

export interface DeviceEventControllerReturnProps {
  add: (key: string, handler: (e: any) => void) => void;
  remove: (key: string) => void;
  clear: () => void;
  is: (key: string) => boolean;
}

function DeviceEventController(): DeviceEventControllerReturnProps {
  let subscriptions: any = {};

  return {
    add: (key, handler) => {
      const subscription = DeviceEventEmitter.addListener(key, e => {
        console.log('이벤트 실행 - ' + key);
        handler(e);
      });
      subscriptions[key] = subscription;
    },
    remove: key => {
      const subscription = subscriptions[key];
      if (subscription) {
        subscription.remove();
      }
    },
    clear: () => {
      Object.keys(subscriptions).forEach(
        key => subscriptions[key] && subscriptions[key].remove(),
      );
    },
    is: key => {
      const subscription = subscriptions[key];
      if (subscription) {
        return true;
      } else {
        return false;
      }
    },
  };
}

export default DeviceEventController();
