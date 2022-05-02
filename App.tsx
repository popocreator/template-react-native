import React, {useEffect} from 'react';
import {Text, SafeAreaView, AppState} from 'react-native';
import PushNotification from 'react-native-push-notification';

// Controller
import AppStateController from './src/controllers/_AppStateController';
import DeviceEventController from './src/controllers/_DeviceEventController';
import PushNotificationController from './src/controllers/_PushNotificationController';

export default function App() {
  useEffect(() => {
    // 컨트롤러 - 초기화
    AppStateController.init(AppState, () => {
      console.log('Running...');
    });
    // 컨트롤러 - 이벤트 바인딩
    DeviceEventController.add('event1', () => {});
    DeviceEventController.add('event2', () => {});
    DeviceEventController.add('event3', () => {});
    PushNotificationController.init();

    // 컨트롤러 - 초기화
    return () => {
      AppStateController.clear();
      DeviceEventController.clear();
    };
  }, []);

  useEffect(() => {
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
