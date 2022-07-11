import {Platform} from 'react-native';

export default function android(callback: () => void) {
  if (Platform.OS === 'android') {
    callback();
  }
}
