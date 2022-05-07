import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

type Props = TextInputProps & {};

export default function _TextField({
  allowFontScaling,
  autoCapitalize,
  autoCorrect,
  autoFocus,
  blurOnSubmit,
  caretHidden,
  contextMenuHidden,
  defaultValue,
  editable,
  keyboardType,
  maxLength,
  multiline,
  onBlur,
  onChange,
  onChangeText,
  onContentSizeChange,
  onEndEditing,
  onPressIn,
  onPressOut,
  onFocus,
  onSelectionChange,
  onSubmitEditing,
  onTextInput,
  onScroll,
  onKeyPress,
  placeholder,
  placeholderTextColor,
  returnKeyType,
  secureTextEntry,
  selectTextOnFocus,
  selection,
  selectionColor,
  style,
  textAlign,
  testID,
  inputAccessoryViewID,
  value,
  maxFontSizeMultiplier,
}: Props) {
  const theme: TextInputProps = {
    allowFontScaling: undefined,
    autoCapitalize: undefined,
    autoCorrect: undefined,
    autoFocus: undefined,
    blurOnSubmit: undefined,
    caretHidden: undefined,
    contextMenuHidden: undefined,
    defaultValue: undefined,
    editable: undefined,
    keyboardType: undefined,
    maxLength: undefined,
    multiline: undefined,
    onBlur: undefined,
    onChange: undefined,
    onChangeText: undefined,
    onContentSizeChange: undefined,
    onEndEditing: undefined,
    onPressIn: undefined,
    onPressOut: undefined,
    onFocus: undefined,
    onSelectionChange: undefined,
    onSubmitEditing: undefined,
    onTextInput: undefined,
    onScroll: undefined,
    onKeyPress: undefined,
    placeholder: undefined,
    placeholderTextColor: undefined,
    returnKeyType: undefined,
    secureTextEntry: undefined,
    selectTextOnFocus: undefined,
    selection: undefined,
    selectionColor: undefined,
    style: undefined,
    textAlign: undefined,
    testID: undefined,
    inputAccessoryViewID: undefined,
    value: undefined,
    maxFontSizeMultiplier: undefined,
  };

  return (
    <TextInput
      allowFontScaling={theme.allowFontScaling || allowFontScaling}
      autoCapitalize={theme.autoCapitalize || autoCapitalize}
      autoCorrect={theme.autoCorrect || autoCorrect}
      autoFocus={theme.autoFocus || autoFocus}
      blurOnSubmit={theme.blurOnSubmit || blurOnSubmit}
      caretHidden={theme.caretHidden || caretHidden}
      contextMenuHidden={theme.contextMenuHidden || contextMenuHidden}
      defaultValue={theme.defaultValue || defaultValue}
      editable={theme.editable || editable}
      keyboardType={theme.keyboardType || keyboardType}
      maxLength={theme.maxLength || maxLength}
      multiline={theme.multiline || multiline}
      onBlur={theme.onBlur || onBlur}
      onChange={theme.onChange || onChange}
      onChangeText={theme.onChangeText || onChangeText}
      onContentSizeChange={theme.onContentSizeChange || onContentSizeChange}
      onEndEditing={theme.onEndEditing || onEndEditing}
      onPressIn={theme.onPressIn || onPressIn}
      onPressOut={theme.onPressOut || onPressOut}
      onFocus={theme.onFocus || onFocus}
      onSelectionChange={theme.onSelectionChange || onSelectionChange}
      onSubmitEditing={theme.onSubmitEditing || onSubmitEditing}
      onTextInput={theme.onTextInput || onTextInput}
      onScroll={theme.onScroll || onScroll}
      onKeyPress={theme.onKeyPress || onKeyPress}
      placeholder={theme.placeholder || placeholder}
      placeholderTextColor={theme.placeholderTextColor || placeholderTextColor}
      returnKeyType={theme.returnKeyType || returnKeyType}
      secureTextEntry={theme.secureTextEntry || secureTextEntry}
      selectTextOnFocus={theme.selectTextOnFocus || selectTextOnFocus}
      selection={theme.selection || selection}
      selectionColor={theme.selectionColor || selectionColor}
      style={theme.style || style}
      textAlign={theme.textAlign || textAlign}
      testID={theme.testID || testID}
      inputAccessoryViewID={theme.inputAccessoryViewID || inputAccessoryViewID}
      value={theme.value || value}
      maxFontSizeMultiplier={
        theme.maxFontSizeMultiplier || maxFontSizeMultiplier
      }
    />
  );
}
