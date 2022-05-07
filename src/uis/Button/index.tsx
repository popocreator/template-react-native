import React from 'react';
import {Text, TouchableHighlight, TouchableHighlightProps} from 'react-native';

type Props = TouchableHighlightProps & {};

export default function _Button({
  activeOpacity,
  onHideUnderlay,
  onShowUnderlay,
  style,
  underlayColor,
  children,
}: Props) {
  const theme: TouchableHighlightProps = {
    activeOpacity: undefined,
    onHideUnderlay: () => {},
    onShowUnderlay: () => {},
    style: undefined,
    underlayColor: undefined,
  };

  return (
    <TouchableHighlight
      activeOpacity={theme.activeOpacity || activeOpacity}
      onHideUnderlay={theme.onHideUnderlay || onHideUnderlay}
      onShowUnderlay={theme.onShowUnderlay || onShowUnderlay}
      style={theme.style || style}
      underlayColor={theme.underlayColor || underlayColor}>
      {children}
    </TouchableHighlight>
  );
}
