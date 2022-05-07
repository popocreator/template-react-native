import React from 'react';
import {Text, TextProps} from 'react-native';

type Props = TextProps & {};

export default function _Text({
  allowFontScaling,
  children,
  ellipsizeMode,
  lineBreakMode,
  numberOfLines,
  onLayout,
  onTextLayout,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  style,
  testID,
  nativeID,
  maxFontSizeMultiplier,
}: Props) {
  const theme: TextProps = {
    allowFontScaling: undefined,
    ellipsizeMode: undefined,
    lineBreakMode: undefined,
    numberOfLines: undefined,
    onLayout: undefined,
    onTextLayout: undefined,
    onPress: undefined,
    onPressIn: undefined,
    onPressOut: undefined,
    onLongPress: undefined,
    style: undefined,
    testID: undefined,
    nativeID: undefined,
    maxFontSizeMultiplier: undefined,
  };

  return (
    <Text
      allowFontScaling={theme.allowFontScaling || allowFontScaling}
      ellipsizeMode={theme.ellipsizeMode || ellipsizeMode}
      lineBreakMode={theme.lineBreakMode || lineBreakMode}
      numberOfLines={theme.numberOfLines || numberOfLines}
      onLayout={theme.onLayout || onLayout}
      onTextLayout={theme.onTextLayout || onTextLayout}
      onPress={theme.onPress || onPress}
      onPressIn={theme.onPressIn || onPressIn}
      onPressOut={theme.onPressOut || onPressOut}
      onLongPress={theme.onLongPress || onLongPress}
      style={theme.style || style}
      testID={theme.testID || testID}
      nativeID={theme.nativeID || nativeID}
      maxFontSizeMultiplier={
        theme.maxFontSizeMultiplier || maxFontSizeMultiplier
      }>
      {children}
    </Text>
  );
}
