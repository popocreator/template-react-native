import {
  ImageStyle,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export default function androidStyle(
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>,
): StyleProp<ViewStyle | TextStyle | ImageStyle> {
  if (Platform.OS === 'android') {
    return style;
  } else {
    return {};
  }
}
