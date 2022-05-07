import React from 'react';
import {View, ViewProps} from 'react-native';

type Props = ViewProps & {};

export default function Container({
  hitSlop,
  onLayout,
  pointerEvents,
  removeClippedSubviews,
  style,
  testID,
  nativeID,
  children,
}: Props) {
  const theme: ViewProps = {
    hitSlop: undefined,
    onLayout: undefined,
    pointerEvents: undefined,
    removeClippedSubviews: undefined,
    style: undefined,
    testID: undefined,
    nativeID: undefined,
  };

  return (
    <View
      hitSlop={theme.hitSlop || hitSlop}
      onLayout={theme.onLayout || onLayout}
      pointerEvents={theme.pointerEvents || pointerEvents}
      removeClippedSubviews={
        theme.removeClippedSubviews || removeClippedSubviews
      }
      style={theme.style || style}
      testID={theme.testID || testID}
      nativeID={theme.nativeID || nativeID}>
      {children}
    </View>
  );
}
