import {useCallback} from 'react';
import {PushNotificationController} from '../controllers';

export default function _usePushNotification() {
  const showNotification = useCallback(
    ({id, message}: {id: string | number; message?: string | undefined}) => {
      PushNotificationController.notify({id, message});
    },
    [],
  );

  const registerNotification = useCallback(
    ({
      id,
      message,
      date,
    }: {
      id: string | number;
      message?: string | undefined;
      date?: Date | undefined;
    }) => {
      PushNotificationController.reserve({id, message, date});
    },
    [],
  );
  return {showNotification, registerNotification};
}
