import {
  ImageStyle,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export default function iosStyle(
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>,
): StyleProp<ViewStyle | TextStyle | ImageStyle> {
  if (Platform.OS === 'ios') {
    return style;
  } else {
    return {};
  }
}
