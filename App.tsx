import React, {useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

// Controller
import AppStateController from './src/controllers/_AppStateController';
import DeviceEventController from './src/controllers/_DeviceEventController';
import PushNotificationController from './src/controllers/_PushNotificationController';
import RootNavigation from './src/navigation';

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


  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
