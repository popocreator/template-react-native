import {useCallback} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {DeviceEventController} from '../controllers';

export default function _useDeviceEvent() {
  const executeDeviceEvent = useCallback(
    (eventType: string, ...params: any[]) => {
      if (DeviceEventController.is(eventType)) {
        DeviceEventEmitter.emit(eventType, params);
      } else {
        console.error('ERROR :: Not found event');
      }
    },
    [],
  );

  return {executeDeviceEvent};
}
