import {PushNotificationIOS} from 'react-native';
import PushNotification, {
  ChannelObject,
  PushNotificationObject,
  PushNotificationOptions,
  PushNotificationScheduleObject,
} from 'react-native-push-notification';

export interface NotificationOptions extends PushNotificationObject {
  channelId: 'normal' | 'reserve';
}

export interface NotificationScheduleOptions
  extends PushNotificationScheduleObject {
  channelId: 'normal' | 'reserve';
}

export interface PushNotificationControllerProps {}

export interface PushNotificationControllerReturnProps {
  init: () => void;
  notify: (options: {id: string | number; message?: string}) => void;
  reserve: (options: {
    id: string | number;
    message?: string;
    date?: Date;
  }) => void;
}

function PushNotificationController(): PushNotificationControllerReturnProps {
  const configureOptions: PushNotificationOptions = {
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  };

  const ChannelType = {
    normal: 'normal',
    reserve: 'reserve',
  };

  const channels: ChannelObject[] = [
    {channelId: ChannelType.normal, channelName: 'channel-normal'},
    {channelId: ChannelType.reserve, channelName: 'channel-reserve'},
  ];

  const normalOptions = {channelId: ChannelType.normal};
  const NormalNotifications: PushNotificationObject[] = [
    {...normalOptions, id: 'notification-normal-1', message: ''},
    {...normalOptions, id: 'notification-normal-2', message: ''},
    {...normalOptions, id: 'notification-normal-3', message: ''},
  ];

  const reserveOptions = {channelId: ChannelType.reserve, date: new Date()};
  const ReserveNotifications: PushNotificationScheduleObject[] = [
    {...reserveOptions, id: 'notification-reserve-1', message: ''},
    {...reserveOptions, id: 'notification-reserve-2', message: ''},
    {...reserveOptions, id: 'notification-reserve-3', message: ''},
  ];

  const channelCallback = (created: boolean) =>
    console.log('Created:' + created);

  return {
    init: () => {
      PushNotification.configure(configureOptions);
      PushNotification.checkPermissions(permission => {
        console.log('PushNotification Permission:' + permission);
      });
      channels.forEach(channel =>
        PushNotification.createChannel(channel, channelCallback),
      );
    },
    notify({id, message}) {
      let options = NormalNotifications.find(n => id === n.id);
      if (options) {
        if (message) options = {...options, message};
        PushNotification.localNotification(options);
      } else {
        console.log('Not Found Notification');
      }
    },
    reserve({id, message, date}) {
      let options = ReserveNotifications.find(n => id === n.id);
      if (options) {
        if (message) options = {...options, message};
        if (date) options = {...options, date};
        PushNotification.localNotificationSchedule(options);
      } else {
        console.log('Not Found Notification');
      }
    },
  };
}

export default PushNotificationController();
