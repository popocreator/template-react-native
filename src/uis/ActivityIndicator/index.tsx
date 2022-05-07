import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

type Props = ActivityIndicatorProps & {};

export default function _ActivityIndicator({
  animating,
  color,
  hidesWhenStopped,
  size,
  style,
}: Props) {
  const theme: ActivityIndicatorProps = {
    animating: undefined,
    color: undefined,
    hidesWhenStopped: undefined,
    size: undefined,
    style: {},
  };

  return (
    <ActivityIndicator
      animating={theme.animating || animating}
      color={theme.color || color}
      hidesWhenStopped={theme.hidesWhenStopped || hidesWhenStopped}
      size={theme.size || size}
      style={[theme.style, style]}
    />
  );
}
