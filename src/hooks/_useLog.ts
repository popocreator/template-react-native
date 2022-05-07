import {useCallback} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import {LogController} from '../controllers';

export default function _useLog() {
  const userLog = useCallback(
    (
      eventType: string,
      eventProperties: Record<string, unknown> | undefined,
    ) => {
      LogController.log(eventType, eventProperties);
    },
    [],
  );

  const crashLog = useCallback(
    (error: Error, jsErrorName?: string | undefined) => {
      LogController.crash(error, jsErrorName);
    },
    [],
  );

  return {userLog, crashLog};
}
