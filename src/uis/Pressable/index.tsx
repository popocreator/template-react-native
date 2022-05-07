import React from 'react';
import {Pressable, PressableProps} from 'react-native';

type Props = PressableProps & {};

export default function _Pressable({
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  children,
  cancelable,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  style,
}: Props) {
  const theme: PressableProps = {
    onPress: undefined,
    onPressIn: undefined,
    onPressOut: undefined,
    onLongPress: undefined,
    onBlur: undefined,
    onFocus: undefined,
    children: undefined,
    cancelable: undefined,
    delayLongPress: undefined,
    disabled: undefined,
    hitSlop: undefined,
    pressRetentionOffset: undefined,
    android_disableSound: undefined,
    android_ripple: undefined,
    testOnly_pressed: undefined,
    style: undefined,
  };

  return (
    <Pressable
      onPress={theme.onPress || onPress}
      onPressIn={theme.onPressIn || onPressIn}
      onPressOut={theme.onPressOut || onPressOut}
      onLongPress={theme.onLongPress || onLongPress}
      onBlur={theme.onBlur || onBlur}
      onFocus={theme.onFocus || onFocus}
      cancelable={theme.cancelable || cancelable}
      delayLongPress={theme.delayLongPress || delayLongPress}
      disabled={theme.disabled || disabled}
      hitSlop={theme.hitSlop || hitSlop}
      pressRetentionOffset={theme.pressRetentionOffset || pressRetentionOffset}
      android_disableSound={theme.android_disableSound || android_disableSound}
      android_ripple={theme.android_ripple || android_ripple}
      testOnly_pressed={theme.testOnly_pressed || testOnly_pressed}
      style={theme.style || style}>
      {children}
    </Pressable>
  );
}
