import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, AppState} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import AppStateController, {
  AppStateControllerReturnProps,
} from './src/controllers/_AppStateController';
import DeviceEventController, {
  DeviceEventControllerReturnProps,
} from './src/controllers/_DeviceEventController';

export default function App() {
  let appStateController: AppStateControllerReturnProps;
  let deviceEventController: DeviceEventControllerReturnProps;

  useEffect(() => {
    // 컨트롤러 - 초기화
    appStateController = AppStateController({
      appState: AppState,
      onActive: () => {
        console.log('Running...');
      },
    });
    deviceEventController = DeviceEventController();

    // 컨트롤러 - 이벤트 바인딩
    appStateController.init();
    deviceEventController.add('event1', () => {});
    deviceEventController.add('event2', () => {});
    deviceEventController.add('event3', () => {});

    // 컨트롤러 - 초기화
    return () => {
      appStateController.clear();
      deviceEventController.clear();
    };
  }, []);

  useEffect(() => {
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.checkPermissions(p => {
      console.log(p);
    });
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'channel-id',
      message: '테스트 팝업',
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>App Component</Text>
    </SafeAreaView>
  );
}
