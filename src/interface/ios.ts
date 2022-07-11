import {Platform} from 'react-native';

export default function ios(callback: () => void) {
  if (Platform.OS === 'ios') {
    callback();
  }
}
