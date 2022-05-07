import React from 'react';
import {Switch, SwitchProps} from 'react-native';

type Props = SwitchProps & {};

export default function _Switch({
  thumbColor,
  trackColor,
  disabled,
  onChange,
  onValueChange,
  testID,
  value,
  ios_backgroundColor,
  style,
}: Props) {
  const theme: SwitchProps = {
    thumbColor: undefined,
    trackColor: undefined,
    disabled: undefined,
    onChange: undefined,
    onValueChange: undefined,
    testID: undefined,
    value: undefined,
    ios_backgroundColor: undefined,
    style: undefined,
  };

  return (
    <Switch
      thumbColor={theme.thumbColor || thumbColor}
      trackColor={theme.trackColor || trackColor}
      disabled={theme.disabled || disabled}
      onChange={theme.onChange || onChange}
      onValueChange={theme.onValueChange || onValueChange}
      testID={theme.testID || testID}
      value={theme.value || value}
      ios_backgroundColor={theme.ios_backgroundColor || ios_backgroundColor}
      style={theme.style || style}
    />
  );
}
